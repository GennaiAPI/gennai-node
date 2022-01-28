import { CharacterBasicProps } from "../character/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { SeriesBasicProps } from "../series/interfaces";

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
  series: SeriesBasicProps;
  characters: CharacterBasicProps[];
  digimons: DigimonBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "title" | "synopsis" | "originalAirDate";
}
