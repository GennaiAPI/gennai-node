import { AnimeBasicProps } from "../anime/interfaces";
import { CharacterBasicProps } from "../character/interfaces";
import { MovieBasicProps } from "../movie/interfaces";

export const digiviceSchema = `
  id
  type
  colors
`;

export interface DigiviceBasicProps {
  id: number;
  type: DigiviceType;
  colors: string[];
}

export interface DigiviceFullProps {
  id: number;
  type: DigiviceType;
  colors: string[];
  digiDestined: CharacterBasicProps;
  animes: AnimeBasicProps[];
  movies: MovieBasicProps[];
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
