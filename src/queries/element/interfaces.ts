import { DigimonProps } from "../digimon/interfaces";

export const elementSchema = `
  id
  name
`;

export interface ElementProps {
  id: number;
  name: string;
  strong: ElementProps[];
  weak: ElementProps[];
  digimons: DigimonProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name";
}
