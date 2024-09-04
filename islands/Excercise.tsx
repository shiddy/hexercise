import type { Signal } from "@preact/signals";
// import { Button } from "../components/Button.tsx";
// import { u } from "../../db/queries/update.ts"

// interface UserProps {
//   user: Signal<>;
// }

// function add_something_to_the_name(props) {
//     const newName = props.user.name + " something";
//     updateUser(props.user.id, Object.assign(props.user, {name: newName}));
// }

export default function Excercise(props: any) {
  // if (!(props.user.name.endsWith(" something something"))) {
  //   add_something_to_the_name(props);
  // }

  console.log(props);
  return (
    <div class="flex gap-8 py-6">
      <p class="text-3xl tabular-nums">{props.ex.name}</p>
      <p>{props.ex.equiptment}</p>
      <ul> 
        {props.ex.muscleGroups.map(e => <li>{e.name}</li>)}
      </ul>
    </div>
  );
}
