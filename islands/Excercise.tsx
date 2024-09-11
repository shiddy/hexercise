import type { Signal } from "@preact/signals";
import ExSet from "../islands/Set.tsx";
import { Card, CardHeader, CardFlag, CardTitle, CardDescription } from "@/components/Card.tsx";
import { Sets } from "@/components/Sets.tsx"


function FmtSet({className, index, weight, rep, tsets, ...props}) {
  return (
    <div class="flex flex-row justify-between pb-1">
        <input id={"w-"+index} type="text" placeholder={weight} class="text-center max-w-20" />
        <input id={"r-"+index} type="text" placeholder={rep} class="text-center max-w-20" />
        <ExSet id={index} tsets={tsets}/>
    </div>
  );
}


function createSets(weights: number[], reps: number[], rir: number) {
  const sets = [];
  for (let i in reps) {
    let r = `${rir} rir`;
    if (i < reps.length) {
      r = reps[i];
    }
  }

  for (let i in weights) {
    sets.push(
      <FmtSet index={i} weight={weights[i]} rep={reps[i]} tsets={weights.length} />
    );
  }

  return (
    <>
      {sets.map(e => e)}
    </>
  )
}


export default function Excercise(props: any) {

  const sets = 4;
  const weights = [];
  const reps = [];
  const rir = Math.floor(Math.random() * 3) + 1;

  for (let i of Array(sets).keys()) {
    //weights.push(lbs[Math.floor(Math.random() * lbs.length)]);
    weights.push(Math.floor(Math.random() * 200) + 1);
    reps.push(Math.floor(Math.random() * 30));
  }

  if (Math.floor(Math.random() * 1))
    reps.pop()

  return (
    <Card className="max-w-3xl mx-auto">
      <div class="flex flex-row justify-between">
        <CardHeader>
          <CardTitle title={props.ex.name} /> 
          <CardDescription title={props.ex.equiptment} /> 
        </CardHeader>
        <CardFlag title={props.ex.muscleGroups[0].name} />
      </div>
      <Sets>
        {createSets(weights, reps, rir)}
      </Sets>
    </Card>
  );
}
