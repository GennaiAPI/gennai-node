import { DigimonBasicProps } from "../digimon/interfaces";

export const typeSchema = `
  id
  name
`;

export interface TypeBasicProps {
  id: number;
  name: string;
}

export interface TypeFullProps {
  id: number;
  name: string;
  strong: TypeBasicProps[];
  weak: TypeBasicProps[];
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name";
}
