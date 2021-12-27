import { DigimonBasicProps } from "../digimon/interfaces";

export const attributeSchema = `
  id
  name
  symbol
  description
`;

export interface AttributeBasicProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
}

export interface AttributeFullProps {
  id: number;
  name: string;
  symbol: string;
  description: string;
  strong: AttributeBasicProps;
  weak: AttributeBasicProps;
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "symbol" | "description";
}
