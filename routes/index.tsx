import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Exercise from "../islands/Excercise.tsx";
import { getMuscleGroupByName, getExcerciseByName } from "@/db/queries/select.ts"
import { FreshContext } from "$fresh/server.ts";

export const handler = async (_req: Request, ctx: FreshContext) => {
  const test = await getMuscleGroupByName('Triceps');
  const test1 = await getExcerciseByName('Skull Crushers');
  return ctx.render({ex: test1});
};

export default function Home(params: any) {
  const ex = (params.data.ex);
  // const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <Exercise ex={ex} />
      </div>
    </div>
  );
  // <Counter count={count} />
  // <MuscleGroup mg={mg} />
}
