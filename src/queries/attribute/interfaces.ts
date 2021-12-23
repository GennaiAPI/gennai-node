export const attributeSchema = `
  id
  name
  symbol
  description
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "symbol" | "description";
}
