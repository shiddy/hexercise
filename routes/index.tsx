import { useSignal } from "@preact/signals";
import Exercise from "../islands/Excercise.tsx";
import { getMuscleGroupByName, getExcerciseByName, getWorkoutById, getWorkoutByMesocycleDay } from "@/db/queries/select.ts"
import { updateWorkout } from "@/db/queries/update.ts"
import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts"

function Login() {
    return (
    <form method="post" action="/api/login">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

function LoggedIn() {
  return (
    <a href="/api/logout">Logout</a>
  );
}

function LoggedOut() {
  return (
    < Login />
  );
}

export const handler = async (_req: Request, ctx: FreshContext) => {
  const cookies = getCookies(_req.headers);
  const out = [];
  //console.log(await getWorkoutByMesocycleDay(1, 1))
  //out.push(await getExcerciseByName('Skull Crushers'));
  //out.push(await getExcerciseByName('Lat Pulldown'));
  return ctx.render({ex: await getWorkoutByMesocycleDay(1, 1), isAllowed: cookies.auth === "bar"});
};

export default function Home(params: any) {
  const ex = (params.data.ex);
  // const count = useSignal(3);
  console.log(params.data);

  return (
    <>
      {params.data.isAllowed ? <LoggedIn /> : <LoggedOut />}
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        {ex.map(e => <Exercise ex={e} />)}
      </div>
    </>
  );
  //<Checkbox />
  // <Counter count={count} />
  // <MuscleGroup mg={mg} />
}
