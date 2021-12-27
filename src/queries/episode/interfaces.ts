import { AnimeBasicProps } from "../anime/interfaces";
import { CharacterBasicProps } from "../character/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";

export const episodeSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface EpisodeBasicProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
}

export interface EpisodeFullProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
  anime: AnimeBasicProps;
  characters: CharacterBasicProps[];
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "title" | "synopsis" | "originalAirDate";
}
