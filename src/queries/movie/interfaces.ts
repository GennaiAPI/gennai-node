import { CharacterProps } from "../character/interfaces";
import { DigimonProps } from "../digimon/interfaces";
import { DigiviceProps } from "../digivice/interfaces";
import { UniverseProps } from "../universe/interfaces";

export const movieSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface MovieProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
  universe: UniverseProps;
  characters: CharacterProps[];
  digimons: DigimonProps[];
  digivices: DigiviceProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "title" | "synopsis" | "originalAirDate";
}
