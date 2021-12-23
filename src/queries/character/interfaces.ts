export const characterSchema = `
  id
  name
  isDigiDestined
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "isDigiDestined";
}
