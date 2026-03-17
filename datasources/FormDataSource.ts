import { IDataSource, IFormFieldView, IFormNode } from "@/interfaces";

export class FormDataSource implements IDataSource {
  id: string;
  label: string;
  fields: IFormFieldView[];

  constructor(form: IFormNode) {
    this.id = form.id;
    this.label = form.name;
    this.fields = form.fields;
  }

  getFields(): IFormFieldView[] {
    return this.fields;
  }
}
