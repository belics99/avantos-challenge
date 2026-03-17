import { getFormFields } from "../getFormFields";
import { IFormDefinition, IFormField } from "@/interfaces";

describe("getFormFields", () => {
  const createField = (avantos_type: string): IFormField => ({
    type: "string",
    title: "Some title",
    avantos_type,
  });

  const createForm = (
    properties: Record<string, IFormField>,
  ): IFormDefinition => ({
    id: "form1",
    name: "Test Form",
    description: "A test form",
    is_reusable: false,
    field_schema: {
      type: "object",
      properties,
    },
    ui_schema: {
      type: "VerticalLayout",
      "ui:order": [],
    },
    dynamic_field_config: {},
  });

  it("should return an empty array if no properties exist", () => {
    const form = createForm({});
    const result = getFormFields(form);
    expect(result).toEqual([]);
  });

  it("should map properties to form fields", () => {
    const form = createForm({
      field1: createField("text"),
      field2: createField("number"),
    });

    const result = getFormFields(form);

    expect(result).toEqual([
      { id: "field1", label: "field1", type: "text" },
      { id: "field2", label: "field2", type: "number" },
    ]);
  });

  it("should handle a single property correctly", () => {
    const form = createForm({
      single: createField("checkbox"),
    });

    const result = getFormFields(form);

    expect(result).toEqual([
      { id: "single", label: "single", type: "checkbox" },
    ]);
  });
});
