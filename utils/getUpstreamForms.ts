import { IGraphEdge } from "@/interfaces";

export function getUpstreamForms(formId: string, edges: IGraphEdge[]) {
  const visited = new Set<string>();
  const result: string[] = [];

  function dfs(current: string) {
    edges
      .filter((e) => e.target === current)
      .forEach((edge) => {
        if (!visited.has(edge.source)) {
          visited.add(edge.source);
          result.push(edge.source);
          dfs(edge.source);
        }
      });
  }

  dfs(formId);

  return result.filter((id) => id !== formId);
}
