import { CharacterBasicProps } from "../character/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { SeriesBasicProps } from "../series/interfaces";

export const digimentalSchema = `
  id
  name
  description
`;

export interface DigimentalBasicProps {
  id: number;
  name: string;
  description: string;
}

export interface DigimentalFullProps {
  id: number;
  name: string;
  description: string;
  crest: CrestBasicProps;
  digiDestineds: CharacterBasicProps[];
  digimons: DigimonBasicProps[];
  series: SeriesBasicProps[];
  movies: MovieBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "description";
}
