import { CharacterBasicProps } from "../character/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { DigiviceBasicProps } from "../digivice/interfaces";
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
  universe: UniverseBasicProps;
  crests: CrestBasicProps[];
  digimentals: DigimentalBasicProps[];
  episodes: EpisodeBasicProps[];
  digimons: DigimonBasicProps[];
  digivices: DigiviceBasicProps[];
  characters: CharacterBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "title" | "synopsis" | "originalAirDate";
}
