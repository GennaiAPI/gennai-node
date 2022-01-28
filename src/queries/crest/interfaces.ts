import { CharacterBasicProps } from "../character/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { SeriesBasicProps } from "../series/interfaces";

export const crestSchema = `
  id
  name
  description
`;

export interface CrestBasicProps {
  id: number;
  name: string;
  description: string;
}

export interface CrestFullProps {
  id: number;
  name: string;
  description: string;
  digimental: DigimentalBasicProps;
  digiDestineds: CharacterBasicProps[];
  series: SeriesBasicProps[];
  movies: MovieBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "description";
}
