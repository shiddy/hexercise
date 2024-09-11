import type { Signal } from "@preact/signals";
import Checkbox from "../islands/Checkbox.tsx"
// import { Button } from "../components/Button.tsx";
// import { u } from "../../db/queries/update.ts"

// interface UserProps {
//   user: Signal<>;
// }

// function add_something_to_the_name(props) {
//     const newName = props.user.name + " something";
//     updateUser(props.user.id, Object.assign(props.user, {name: newName}));
// }

function renderSets(weights, reps, day_rir) {
  let out = [];
  out.push(
      <div class="min-w-full flex justify-between">
      <p>Weight</p>
      <p>Reps</p>
      <p></p>
      </div>
  )
  for (let i in weights) {
    let r = `${day_rir} rir`;
    if (i < reps.length) {
      r = reps[i];
    }

    out.push(
      <div class="min-w-full flex justify-between">
        <form>
          <input id={"w-"+i} type="text" placeholder={weights[i]} class="lu tu aeb afh arw auc ayb bbz bcd bcl bgg bnh bni bnu cng cni text-center max-w-20" />
          <input id={"r-"+i} type="text" placeholder={r} class="lu tu aeb afh arw auc ayb bbz bcd bcl bgg bnh bni bnu cng cni text-center max-w-20" />
          <Checkbox id={i} sets={weights}/>
        </form>
      </div>
    )
        // <input type="checkbox" class="h-6 w-6 rounded-lg text-red-200 checked:bg-red-600 checked:border-red-600 focus:ring-violet-300" />
  }

//        <div class="inline-flex items-center align-bottom">
//  <label class="flex items-center cursor-pointer relative"> <input defaultChecked type="checkbox" class="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-lg bg-red-100 shadow hover:shadow-md border border-red-300 checked:bg-red-800 checked:border-red-800" id="check-custom-style" />
//    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
//      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
//    </svg>
//    </span>
//  </label>
//</div>
  return (
    <>
      {out.map(e => e)}
    </>
  )
}

export default function Excercise(props: any) {
  console.log(props.id)
  // if (!(props.user.name.endsWith(" something something"))) {
  //   add_something_to_the_name(props);
  // }
  const lbs = [5, 10, 12.5, 15, 20, 25, 30, 35, 40, 50, 60];

  const sets = Math.floor(Math.random() * 5) + 1;
  //console.log(sets);
  const weights = [];
  const reps = [];
  const day_rir = Math.floor(Math.random() * 3) + 1;

  for (let i of Array(sets).keys()) {
    weights.push(lbs[Math.floor(Math.random() * lbs.length)]);
    reps.push(Math.floor(Math.random() * 30));
  }

  if (Math.floor(Math.random() * 1))
    reps.pop()

  //console.log(weights);
  //console.log(reps);

  return (
    <>
    <div class="bg-red-200 min-w-full my-2">
      <div class="flex justify-between">
        <div>
          <p>{props.ex.name}</p>
          <p>{props.ex.equiptment}</p>
        </div>
        <p>{props.ex.muscleGroups[0].name}</p>
      </div>
      <br/>
      <div class="flex flex-col">
        {renderSets(weights, reps, day_rir)}
      </div>
    </div>
    </>
  );
}
