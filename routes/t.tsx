import SignInForm from "../islands/SignIn.tsx"
import { getCookies } from "https://deno.land/std/http/cookie.ts";
import type {Handlers, PageProps} from "$fresh/server.ts";

export type Data = {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.auth = "are"})
  }
}

export default function Home({data: {isAllowed}}: PageProps<Data>) {
  console.log(isAllowed);
  return (
    <div>
      <p>You are currently {isAllowed ? "are" : " are not"} signed in</p>
    </div>
  )
}

