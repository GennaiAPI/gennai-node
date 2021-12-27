import { DigimonBasicProps } from "../digimon/interfaces";

export const familySchema = `
  id
  name
  symbol
  description
`;

export interface FamilyBasicProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
}

export interface FamilyFullProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "symbol" | "description";
}
