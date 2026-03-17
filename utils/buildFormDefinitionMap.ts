import { IFormDefinition } from "@/interfaces";

export function buildFormDefinitionMap(forms: IFormDefinition[]) {
  const map: Record<string, IFormDefinition> = {};

  forms.forEach((form) => {
    map[form.id] = form;
  });

  return map;
}
