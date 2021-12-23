export const crestSchema = `
  id
  name
  description
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "description";
}
