import { AnimeProps } from "../anime/interfaces";
import { CharacterProps } from "../character/interfaces";
import { MovieProps } from "../movie/interfaces";

export const universeSchema = `
  id
  name
`;

export interface UniverseProps {
  id: number;
  name: string;
  animes: AnimeProps[];
  movies: MovieProps[];
  characters: CharacterProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name";
}
