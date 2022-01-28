import { CharacterBasicProps } from "../character/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { SeriesBasicProps } from "../series/interfaces";

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
  series: SeriesBasicProps[];
  movies: MovieBasicProps[];
  characters: CharacterBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name";
}
