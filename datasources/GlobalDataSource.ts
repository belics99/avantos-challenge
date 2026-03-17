import { IDataSource, IFormFieldView } from "@/interfaces";

export class GlobalDataSource implements IDataSource {
  id = "global";
  label = "Global Data";

  getFields(): IFormFieldView[] {
    return [
      { id: "user_id", label: "User Id", type: "string" },
      { id: "user_name", label: "User Name", type: "string" },
      { id: "user_email", label: "User Email", type: "email" },
      { id: "user_phone", label: "User Phone", type: "phone" },
      { id: "organisation_id", label: "Organisation ID", type: "string" },
      { id: "organisation_name", label: "Organisation Name", type: "string" },
      { id: "organisation_email", label: "Organisation Email", type: "email" },
    ];
  }
}
