import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";


//if (!className) {
//  className = '';
//}
export function Sets({className, ...props}) {
  return (
    <>
      <div class="flex justify-between px-4">
        <p class="mb-1 block text-sm">Weight</p>
        <p class="mb-1 block text-sm">Reps</p>
        <p/>
      </div>
      <div class="flex flex-col justify-between px-4 pb-4"
        {...props}
      />
    </>
  );
}
