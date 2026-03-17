import { IFormDefinition } from "@/interfaces";
import { buildFormDefinitionMap } from "../buildFormDefinitionMap";

describe("buildFormDefinitionMap", () => {
  const createForm = (id: string): IFormDefinition => ({
    id,
    name: `Form ${id}`,
    description: `Description for ${id}`,
    is_reusable: false,
    field_schema: {
      type: "object",
      properties: {},
    },
    ui_schema: {
      type: "VerticalLayout",
      "ui:order": [],
    },
    dynamic_field_config: {},
  });

  it("should return an empty object when given an empty array", () => {
    const result = buildFormDefinitionMap([]);
    expect(result).toEqual({});
  });

  it("should map forms by their id", () => {
    const forms: IFormDefinition[] = [createForm("form1"), createForm("form2")];

    const result = buildFormDefinitionMap(forms);

    expect(result).toEqual({
      form1: forms[0],
      form2: forms[1],
    });
  });

  it("should overwrite duplicate ids with the last one", () => {
    const forms: IFormDefinition[] = [createForm("form1"), createForm("form1")];

    const result = buildFormDefinitionMap(forms);

    expect(result).toEqual({
      form1: forms[1],
    });
  });
});
