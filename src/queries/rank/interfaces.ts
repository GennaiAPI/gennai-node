import { DigimonProps } from "../digimon/interfaces";

export const rankSchema = `
  id
  name
  description
`;

export interface RankProps {
  id: number;
  name: string;
  description: string;
  digimons: DigimonProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "description";
}
