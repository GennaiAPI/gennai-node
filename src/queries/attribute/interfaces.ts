import { DigimonProps } from "../digimon/interfaces";

export const attributeSchema = `
  id
  name
  symbol
  description
`;

export interface AttributeProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
  strong: AttributeProps;
  weak: AttributeProps;
  digimons: DigimonProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "symbol" | "description";
}
