import { DigimonProps } from "../digimon/interfaces";

export const familySchema = `
  id
  name
  symbol
  description
`;

export interface FamilyProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
  digimons: DigimonProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "symbol" | "description";
}
