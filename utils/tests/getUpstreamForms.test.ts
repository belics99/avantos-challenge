import { getUpstreamForms } from "../getUpstreamForms";
import { IGraphEdge } from "@/interfaces";

describe("getUpstreamForms", () => {
  it("should return an empty array if there are no edges", () => {
    const edges: IGraphEdge[] = [];
    const result = getUpstreamForms("form1", edges);
    expect(result).toEqual([]);
  });

  it("should return direct upstream form", () => {
    const edges: IGraphEdge[] = [
      { id: "e1", source: "formA", target: "formB" },
    ];

    const result = getUpstreamForms("formB", edges);
    expect(result).toEqual(["formA"]);
  });

  it("should return multiple upstream forms in DFS order", () => {
    const edges: IGraphEdge[] = [
      { id: "e1", source: "formA", target: "formB" },
      { id: "e2", source: "formB", target: "formC" },
      { id: "e3", source: "formD", target: "formC" },
    ];

    const result = getUpstreamForms("formC", edges);

    expect(result).toEqual(["formB", "formA", "formD"]);
  });

  it("should handle cyclic graphs without infinite loop", () => {
    const edges: IGraphEdge[] = [
      { id: "e1", source: "formA", target: "formB" },
      { id: "e2", source: "formB", target: "formC" },
      { id: "e3", source: "formC", target: "formA" },
    ];

    const result = getUpstreamForms("formC", edges);

    expect(result).toEqual(["formB", "formA"]);
  });

  it("should return empty array if formId has no upstream", () => {
    const edges: IGraphEdge[] = [
      { id: "e1", source: "formX", target: "formY" },
    ];

    const result = getUpstreamForms("formZ", edges);
    expect(result).toEqual([]);
  });
});
