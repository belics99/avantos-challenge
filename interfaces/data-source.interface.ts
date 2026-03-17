export interface IDataSource {
  id: string;
  label: string;
  getFields(): {
    id: string;
    label: string;
  }[];
}
