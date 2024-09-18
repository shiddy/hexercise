import type { Signal } from "@preact/signals";
import ExSet from "../islands/Set.tsx";
import { Card, CardHeader, CardFlag, CardTitle, CardDescription } from "@/components/Card.tsx";
import { Sets } from "@/components/Sets.tsx"


function FmtSet({className, index, rec_weight, rec_rep, weight, rep, ...props}) {
  return (
    <div class="flex flex-row justify-between pb-1">
        <input id={"w-"+index} type="text" placeholder={rec_weight} value={weight} class="text-center max-w-20" />
        <input id={"r-"+index} type="text" placeholder={rec_rep} value={rep} class="text-center max-w-20" />
        <ExSet id={index} tsets={rec_weight.length}/>
    </div>
  );
}


function createSets(wo: any, rir: number) {
  const sets = [];
  const workout_id = wo.id;
  const rec_weights = wo.recommended_weight;
  const rec_reps = wo.recommended_reps;
  const act_weights = wo.finished_weight;
  const act_reps = wo.finished_reps;

  // Place RIR for reps without an entry
  for (let i of Array(wo.sets).keys()) {
    if (!(i >= rec_reps.length)) {
      rec_reps.push(`${rir} rir`);
    }
  }

  for (let i in rec_weights) {
    sets.push(
      <FmtSet
        index={`${workout_id}-${i}`}
        rec_weight={rec_weights[i]}
        rec_rep={rec_reps[i]}
        weight={act_weights[i]}
        rep={act_reps[i]}
      />
    );
  }

  return (
    <>
      {sets.map(e => e)}
    </>
  )
}


export default function Excercise(props: any) {

  //const sets = 4;
  //const weights = [];
  //const reps = [];
  //if (Math.floor(Math.random() * 1))
  //  reps.pop()
  const rir = Math.floor(Math.random() * 3) + 1;

  return (
    <Card className="max-w-3xl mx-auto">
      <div class="flex flex-row justify-between">
        <CardHeader>
          <CardTitle title={props.ex.excercise_table.name} /> 
          <CardDescription title={props.ex.equipment_table.name} /> 
        </CardHeader>
        <CardFlag title={props.ex.muscle_groups_table.name} />
      </div>
      <Sets workout_id={props.ex.workout_table.id} >
        {createSets(props.ex.workout_table, rir)}
      </Sets>
    </Card>
  );
}
