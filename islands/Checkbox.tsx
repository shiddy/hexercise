import { useState } from "preact/hooks";
import { updateWorkout } from "../db/queries/update.ts"


export default function Checkbox(params) {
  const [checked, setChecked] = useState(false);

  const handleChange = async (event: Event) => {
    //console.log(parseInt(event.target.id.split('-')[1]));
    const isChecked = (event.target as HTMLInputElement).checked;

    //console.log("Checkbox clicked, new value:", isChecked);

    setChecked(isChecked);

    if (isChecked) {
    }
    // console.log(params);

    const weights = [];
    const reps = [];
    const completed = [];
    for (let i in params.sets) {
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
    <div>
      <input
        type="checkbox"
        id={"c-" + params.id}
        checked={checked}
        onChange={handleChange}
      />
      <label id={"c-" + params.id}></label>
    </div>
  );
}
