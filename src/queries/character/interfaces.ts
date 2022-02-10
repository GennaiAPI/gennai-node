import { CrestBasicProps } from "../crest/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { DigiviceBasicProps } from "../digivice/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { SeriesBasicProps } from "../series/interfaces";
import { SpiritBasicProps } from "../spirit/interfaces";
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
  movies: MovieBasicProps[];
  series: SeriesBasicProps[];
  episodes: EpisodeBasicProps[];
  crests: CrestBasicProps[];
  spirits: SpiritBasicProps[];
  digivices: DigiviceBasicProps[];
  digimentals: DigimentalBasicProps[];
  partners: DigimonBasicProps[];
  universes: UniverseBasicProps[];
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "isDigiDestined";
}
