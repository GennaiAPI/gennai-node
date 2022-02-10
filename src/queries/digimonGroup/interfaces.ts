import { DigimonBasicProps } from "../digimon/interfaces";

export const digimonGroupSchema = `
  id
  name
  description
`;

export interface DigimonGroupBasicProps {
  id: number;
  name: string;
  description: string;
}

export interface DigimonGroupFullProps {
  id: number;
  name: string;
  description: string;
  digimon: DigimonBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "description";
}
