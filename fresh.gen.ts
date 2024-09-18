// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_meso_day_ from "./routes/[meso]/[day].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_login from "./routes/api/login.ts";
import * as $api_logout from "./routes/api/logout.ts";
import * as $api_update_workout from "./routes/api/update-workout.ts";
import * as $index from "./routes/index.tsx";
import * as $musclegroups_id_ from "./routes/musclegroups/[id].tsx";
import * as $t from "./routes/t.tsx";
import * as $Excercise from "./islands/Excercise.tsx";
import * as $Set from "./islands/Set.tsx";
import * as $SignIn from "./islands/SignIn.tsx";
import * as $State from "./islands/State.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[meso]/[day].tsx": $_meso_day_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/login.ts": $api_login,
    "./routes/api/logout.ts": $api_logout,
    "./routes/api/update-workout.ts": $api_update_workout,
    "./routes/index.tsx": $index,
    "./routes/musclegroups/[id].tsx": $musclegroups_id_,
    "./routes/t.tsx": $t,
  },
  islands: {
    "./islands/Excercise.tsx": $Excercise,
    "./islands/Set.tsx": $Set,
    "./islands/SignIn.tsx": $SignIn,
    "./islands/State.tsx": $State,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
