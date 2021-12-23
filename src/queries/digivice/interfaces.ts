export const digiviceSchema = `
  id
  type
  colors
`;

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "type" | "colors";
}

export enum DigiviceType {
  CLASSIC,
  D_3,
}
