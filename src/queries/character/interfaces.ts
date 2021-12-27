import { AnimeProps } from "../anime/interfaces";
import { CrestProps } from "../crest/interfaces";
import { DigimentalProps } from "../digimental/interfaces";
import { DigiviceProps } from "../digivice/interfaces";
import { EpisodeProps } from "../episode/interfaces";
import { MovieProps } from "../movie/interfaces";
import { UniverseProps } from "../universe/interfaces";

export const characterSchema = `
  id
  name
  isDigiDestined
`;

export interface CharacterProps {
  id: number;
  name: string;
  isDigiDestined: boolean;
  animes: AnimeProps[];
  digivices: DigiviceProps[];
  crest: CrestProps;
  digimental: DigimentalProps;
  universes: UniverseProps[];
  episodes: EpisodeProps[];
  movies: MovieProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "isDigiDestined";
}
