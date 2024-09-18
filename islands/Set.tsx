import { useState } from "preact/hooks";
import { updateWorkout } from "../db/queries/update.ts"

export default function ExSet(params) {
  const [checked, setChecked] = useState(false);

  const handleChange = async (event: Event) => {
    const isChecked = (event.target as HTMLInputElement).checked;

    setChecked(isChecked);
    const parts = event.target.id.split('-');
    let workout_id = parseInt(parts[1]);
    let index = parseInt(parts[2]);

    // Here we get all the current values of the sets where the checkbox
    // was clicked
    const weights = [];
    const reps = [];
    const completed = [];
    for (let i of Array(params.tsets).keys()) {
      weights.push(
        parseInt(document.getElementById(`w-${workout_id}-${i}`).value)
      )
      const rep = document.getElementById(`r-${workout_id}-${i}`).value
      if (!(rep.includes('rir'))) {
        reps.push(
          parseInt(rep)
        );
      }
      completed.push(
        parseInt(+(document.getElementById(`c-${workout_id}-${i}`).checked))
      )
    }

    // Here is where we check whether you have finished your preceeding sets
    for (let i of Array(index).keys()) {
      if (!(document.getElementById(`c-${workout_id}-${i}`).checked)) {
        document.getElementById(`c-${workout_id}-${index}`).checked = false;
        setChecked(false);
        return null;
      }
    }

    // Here is where we check whether the current row has an actual value or is still a rir reccomendataion
    console.log(index)
    if (document.getElementById(`r-${workout_id}-${index}`).placeholder.includes('rir')) {
        document.getElementById(`c-${workout_id}-${index}`).checked = false;
      setChecked(false);
      return null;
    }

    // Here is where we handle the user checking the box without entering
    // values into the input. We default to grabbing the placeholder and
    // setting the actual value of the input
    if (isChecked) {
      if (!weights[index]) {
        const weight = parseInt(document.getElementById(`w-${workout_id}-${index}`).placeholder);
        document.getElementById(`w-${workout_id}-${index}`).value = weight;
        weights[index] = weight;
      }
      if (!reps[index]) {
        const rep = parseInt(document.getElementById(`r-${workout_id}-${index}`).placeholder);
        document.getElementById(`r-${workout_id}-${index}`).value = rep;
        reps[index] = rep;
      }
    }

    try {
      const response = await fetch("/api/update-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: workout_id,
          data: {
            finished_weight: weights,
            finished_reps: reps,
            completed: completed
          }
        }),
      });

      if (response.ok) {
        console.log("Workout update successful");
      } else {
        console.log("Workout update failed");
      }
    } catch (error) {
      console.error("Error in async call:", error);
    }
  };

  return (
    <div class="items-center align-bottom">
      <label class="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          class="exCheckbox peer"
          id={"c-" + params.id}
          checked={checked}
          onChange={handleChange}
        />
        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        </span>
      </label>
    </div>
  );
}
