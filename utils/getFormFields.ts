import { IFormDefinition, IFormField } from "@/interfaces";

export function getFormFields(formDefinition: IFormDefinition) {
  const props = formDefinition.field_schema?.properties || {};

  return Object.entries(props).map(([key, value]: [string, IFormField]) => ({
    id: key,
    label: key,
    type: value.avantos_type,
  }));
}
