import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();

    // This is litterally just stubbing out how we should hold users before I deal
    // with setting up a more long term and robust supabase instance where I can 
    // use things like OAUTH. Obvs we need to make this work in a way that is hashed
    // salted and all the like.
    if (form.get("username") === "shiddy" && form.get("password") === "test") {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "bar", // this should be a unique value for each session
        maxAge: 3600,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", "/");
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      const headers = new Headers();
      headers.set("location", "/");
      return new Response(null, {
        status: 303, // this should*? be a 403 and we should redirect afterwards?
        headers,
      });
    }
  },
};
