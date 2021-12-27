import { CharacterProps } from "../character/interfaces";
import { CrestProps } from "../crest/interfaces";
import { DigimonProps } from "../digimon/interfaces";
import { DigiviceProps } from "../digivice/interfaces";
import { EpisodeProps } from "../episode/interfaces";
import { UniverseProps } from "../universe/interfaces";

export const animeSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface AnimeProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
  episodes: EpisodeProps[];
  digimons: DigimonProps[];
  digivices: DigiviceProps[];
  characters: CharacterProps[];
  crests: CrestProps[];
  universe: UniverseProps;
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "title" | "synopsis" | "originalAirDate";
}
