import { AnimeBasicProps } from "../anime/interfaces";
import { AttributeBasicProps } from "../attribute/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { FieldBasicProps } from "../field/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { RankBasicProps } from "../rank/interfaces";
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
  type: TypeBasicProps;
  attribute: AttributeBasicProps;
  digimental: DigimentalBasicProps;
  otherNames: DigimonNameProps[];
  prior: DigimonBasicProps[];
  next: DigimonBasicProps[];
  fields: FieldBasicProps[];
  animes: AnimeBasicProps[];
  episodes: EpisodeBasicProps[];
  movies: MovieBasicProps[];
}

interface DigimonNameProps {
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
