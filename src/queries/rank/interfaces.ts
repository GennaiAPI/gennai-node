import { DigimonBasicProps } from "../digimon/interfaces";

export const rankSchema = `
  id
  name
  description
`;

export interface RankBasicProps {
  id: number;
  name: string;
  description: string;
}

export interface RankFullProps {
  id: number;
  name: string;
  description: string;
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "description";
}
