import { IGraphResponse } from "@/interfaces";

export async function getBlueprintGraph(): Promise<IGraphResponse> {
  const tenantId = "1";
  const actionBlueprintId = "bp_01jk766tckfwx84xjcxazggzyc";

  const res = await fetch(
    `http://localhost:3000/api/v1/${tenantId}/actions/blueprints/${actionBlueprintId}/graph`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch graph");
  }

  return res.json();
}
