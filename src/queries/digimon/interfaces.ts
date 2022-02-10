import { AttributeBasicProps } from "../attribute/interfaces";
import { CharacterBasicProps } from "../character/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { DigimonGroupBasicProps } from "../digimonGroup/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { FieldBasicProps } from "../field/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { RankBasicProps } from "../rank/interfaces";
import { SeriesBasicProps } from "../series/interfaces";
import { SpiritBasicProps } from "../spirit/interfaces";
import { TypeBasicProps } from "../type/interfaces";

export const digimonSchema = `
  id
  slug
  name
  isJogress
  hasXAntibody
`;

export interface DigimonBasicProps {
  id: number;
  slug: string;
  name: string;
  isJogress: boolean;
  hasXAntibody: boolean;
}

export interface DigimonFullProps {
  id: number;
  slug: string;
  name: string;
  isJogress: boolean;
  hasXAntibody: boolean;
  rank: RankBasicProps;
  attribute: AttributeBasicProps;
  type: TypeBasicProps;
  digimental: DigimentalBasicProps;
  movies: MovieBasicProps[];
  series: SeriesBasicProps[];
  episodes: EpisodeBasicProps[];
  fields: FieldBasicProps[];
  spirits: SpiritBasicProps[];
  partners: CharacterBasicProps[];
  previous: DigimonBasicProps[];
  next: DigimonBasicProps[];
  groups: DigimonGroupBasicProps[];
  otherNames: DigimonNameProps[];
}

export interface DigimonNameProps {
  id: number;
  lang: string;
  name: string;
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "slug" | "isJogress" | "hasXAntibody";
}
