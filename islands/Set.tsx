import { useState } from "preact/hooks";
import { updateWorkout } from "../db/queries/update.ts"

export default function ExSet(params) {
  const [checked, setChecked] = useState(false);

  const handleChange = async (event: Event) => {
    const isChecked = (event.target as HTMLInputElement).checked;

    setChecked(isChecked);

    if (isChecked) {
    }

    const weights = [];
    const reps = [];
    const completed = [];
    for (let i of Array(params.tsets).keys()) {
      weights.push(
        parseInt(document.getElementById(`w-${i}`).value)
      )
      reps.push(
        parseInt(document.getElementById(`r-${i}`).value)
      )
      completed.push(
        parseInt(+(document.getElementById(`c-${i}`).checked))
      )
    }
    
    const set_index = parseInt(event.target.id.split('-')[1]);
    if (!weights[set_index]) {
      const weight = parseInt(document.getElementById(`w-${set_index}`).placeholder);
      document.getElementById(`w-${set_index}`).value = weight;
      weights[set_index] = weight;
    }
    if (!reps[set_index]) {
      const rep = parseInt(document.getElementById(`r-${set_index}`).placeholder);
      document.getElementById(`r-${set_index}`).value = rep;
      reps[set_index] = rep;
    }

    try {
      const response = await fetch("/api/update-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
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
