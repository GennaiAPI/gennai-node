import { DigimonBasicProps } from "../digimon/interfaces";

export const fieldSchema = `
  id
  name
  symbol
  description
`;

export interface FieldBasicProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
}

export interface FieldFullProps {
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
