export const digimonSchema = `
  id
  name
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name";
}
