import { CharacterBasicProps } from "../character/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { DigiviceBasicProps } from "../digivice/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { UniverseBasicProps } from "../universe/interfaces";

export const animeSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface AnimeBasicProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
}

export interface AnimeFullProps {
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
