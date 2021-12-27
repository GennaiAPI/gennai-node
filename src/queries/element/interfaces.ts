import { DigimonBasicProps } from "../digimon/interfaces";

export const elementSchema = `
  id
  name
`;

export interface ElementBasicProps {
  id: number;
  name: string;
}

export interface ElementFullProps {
  id: number;
  name: string;
  strong: ElementBasicProps[];
  weak: ElementBasicProps[];
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name";
}
