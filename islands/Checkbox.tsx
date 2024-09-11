import { useState } from "preact/hooks";
import { updateWorkout } from "../db/queries/update.ts"


export default function Checkbox(params) {
  const [checked, setChecked] = useState(false);

  const handleChange = async (event: Event) => {
    const isChecked = (event.target as HTMLInputElement).checked;

    console.log("Checkbox clicked, new value:", isChecked);

    setChecked(isChecked);

    if (isChecked) {
    }
    // console.log(params);

    const r = [];
    console.log("o-sets" + params.sets)
    for (let i in params.sets) {
      console.log(document.getElementById(`r-${i}`).value)
      r.push(
        parseInt(document.getElementById(`r-${i}`).value)
      )
    }

    console.log(r);

    const a = Array(params.sets);
    const d = {};
    // const formData = new FormData();
    // formData.append("weight", (document.getElementById("w-0") as HTMLInputElement).value);
    // formData.append("reps", (document.getElementById("r-0") as HTMLInputElement).value);
    // d["reps"] = a;
    // d.reps[params.id] = document.getElementById(`r-${params.id}`).value
    // console.log(formData.reps);

    try {
      const response = await fetch("/api/update-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
          data: {
            finished_reps: r,
            completed: isChecked
          }
          // data: {finished_reps: [formData.reps], completed: isChecked}
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
        id={"myCheckbox-" + params.id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={"myCheckbox-" + params.id}>Checkbox</label>
    </div>
  );
}
