import { AnimeBasicProps } from "../anime/interfaces";
import { CharacterBasicProps } from "../character/interfaces";
import { MovieBasicProps } from "../movie/interfaces";

export const universeSchema = `
  id
  name
`;

export interface UniverseBasicProps {
  id: number;
  name: string;
}

export interface UniverseFullProps {
  id: number;
  name: string;
  animes: AnimeBasicProps[];
  movies: MovieBasicProps[];
  characters: CharacterBasicProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name";
}
