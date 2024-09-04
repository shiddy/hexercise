// import { useSignal } from "@preact/signals";
// import Counter from "@/islands/Counter.tsx";
// import User from "@/islands/User.tsx";
// import { getUserById } from "@/db/queries/select.ts"
import { FreshContext } from "$fresh/server.ts";

// export const handler = async (_req: Request, ctx: FreshContext) => {
//   const test = await getUserById(ctx.params.id);
//   return ctx.render({t: test[0]});
// };

export default function Home(params: any) {
  // const user = params.data.t;
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
      </div>
    </div>
  );
        // <User user={user} />
  // <Counter count={count} />
}
