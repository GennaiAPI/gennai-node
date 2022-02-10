import { CharacterBasicProps } from "../character/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { UniverseBasicProps } from "../universe/interfaces";

export const seriesSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface SeriesBasicProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
}

export interface SeriesFullProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
  episodes: EpisodeBasicProps[];
  digimons: DigimonBasicProps[];
  characters: CharacterBasicProps[];
  universe: UniverseBasicProps;
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "title" | "synopsis" | "originalAirDate";
}
