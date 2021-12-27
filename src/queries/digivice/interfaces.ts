import { AnimeProps } from "../anime/interfaces";
import { CharacterProps } from "../character/interfaces";
import { MovieProps } from "../movie/interfaces";

export const digiviceSchema = `
  id
  type
  colors
`;

export interface DigiviceProps {
  id: number;
  digiDestined: CharacterProps;
  colors: string[];
  type: DigiviceType;
  animes: AnimeProps[];
  movies: MovieProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "type" | "colors";
}

export enum DigiviceType {
  CLASSIC,
  D_3,
}
