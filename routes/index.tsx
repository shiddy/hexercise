import { useSignal } from "@preact/signals";
//import Counter from "../islands/Counter.tsx";
import Exercise from "../islands/Excercise.tsx";
import { getMuscleGroupByName, getExcerciseByName, getWorkoutById } from "@/db/queries/select.ts"
import { updateWorkout } from "@/db/queries/update.ts"
import { FreshContext } from "$fresh/server.ts";
//import Checkbox from "../islands/Checkbox.tsx"

// async function uW() {
//   console.log("calling updateworkout");
//   // import { updateWorkout } from "@/db/queries/update.ts"
//   //   await updateWorkout({finished_reps: [7, 7]});
//   console.log("Called updateWorkout");
// }

export const handler = async (_req: Request, ctx: FreshContext) => {
  const out = [];
  out.push(await getExcerciseByName('Skull Crushers'));
  out.push(await getExcerciseByName('Lat Pulldown'));
  out.push(await getExcerciseByName('Dip'));
  out.push(await getExcerciseByName('Overhead Triceps Extension'));
  out.push(await getExcerciseByName('EZ Bar Overhead Triceps Extension'));
  out.push(await getExcerciseByName('Triceps Pushdown'));
  return ctx.render({ex: out});
};

export default function Home(params: any) {
  const ex = (params.data.ex);
  // const count = useSignal(3);

  return (
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        {ex.map((e, i) => <Exercise ex={e} i={i} />)}
      </div>
  );
        //<Checkbox />
  // <Counter count={count} />
  // <MuscleGroup mg={mg} />
}
