import { AnimeProps } from "../anime/interfaces";
import { CharacterProps } from "../character/interfaces";
import { DigimonProps } from "../digimon/interfaces";

export const episodeSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface EpisodeProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
  anime: AnimeProps;
  characters: CharacterProps[];
  digimons: DigimonProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "title" | "synopsis" | "originalAirDate";
}
