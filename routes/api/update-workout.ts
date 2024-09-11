import { HandlerContext } from "$fresh/server.ts";
import { updateWorkout } from "@/db/queries/update.ts"


export const handler = async (req: Request, _ctx: HandlerContext) => {
  try {
    const { id, data } = await req.json();  // Get the data from the request body

    // Call the updateWorkout function to update the database
    const result = await updateWorkout(id, data)

    // Respond with success
    return new Response(JSON.stringify({ success: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating workout:", error);
    return new Response(JSON.stringify({ error: "Failed to update workout" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
