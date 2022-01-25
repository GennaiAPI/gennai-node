import { AnimeBasicProps } from "../anime/interfaces";
import { CharacterBasicProps } from "../character/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { MovieBasicProps } from "../movie/interfaces";

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
  animes: AnimeBasicProps[];
  movies: MovieBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "description";
}
