import { AnimeBasicProps } from "../anime/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { DigiviceBasicProps } from "../digivice/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { UniverseBasicProps } from "../universe/interfaces";

export const characterSchema = `
  id
  name
  isDigiDestined
`;

export interface CharacterBasicProps {
  id: number;
  name: string;
  isDigiDestined: boolean;
}

export interface CharacterFullProps {
  id: number;
  name: string;
  isDigiDestined: boolean;
  crests: CrestBasicProps[];
  digimentals: DigimentalBasicProps[];
  animes: AnimeBasicProps[];
  digivices: DigiviceBasicProps[];
  universes: UniverseBasicProps[];
  episodes: EpisodeBasicProps[];
  movies: MovieBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "isDigiDestined";
}
