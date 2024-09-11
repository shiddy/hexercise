import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Card({className, ...props}) {
  return (
    <div
      class={"card " + className}
      {...props}
    />
  );
}

export function CardHeader({className, ...props}) {
  if (!className) {
    className = '';
  }
  return (
    <div
      class={"cardHeader " + className}
      {...props}
    />
  );
}

export function CardTitle({className, title, ...props}) {
  if (!className) {
    className = '';
  }
  return (
    <div class={"cardTitle " + className} >
      <h3 class="cardTitleH" >
        {title}
      </h3>
    </div>
  );
}

export function CardDescription({className, title, ...props}) {
  if (!className) {
    className = '';
  }
  return (
    <div class={"cardDescription " + className}>
      <p class="cardDescriptionP">
        {title}
      </p>
    </div>
  );
}

export function CardFlag({title, ...props}) {
  return (
    <div class="flex flex-row justify-self-end" >
      <div class="flex flex-row justify-self-end">
        <div class="mr-0 border-t-[2.5rem] border-t-emerald-500 opacity-75
        border-l-[0.5rem] border-l-transparent">
        </div>
        <div className="h-fit bg-emerald-500 text-white py-2 px-4 ml-0 shadow-md rounded-tr-lg opacity-75">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
      </div>
    </div >
  );
}

export function CardContent({className, ...props}) {
  if (!className) {
    className = '';
  }
  return (
    <div
      class={"cardContent " + className}
      {...props}
    />
  );
}
