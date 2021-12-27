import { AnimeProps } from "../anime/interfaces";
import { AttributeProps } from "../attribute/interfaces";
import { DigimentalProps } from "../digimental/interfaces";
import { ElementProps } from "../element/interfaces";
import { EpisodeProps } from "../episode/interfaces";
import { FamilyProps } from "../family/interfaces";
import { MovieProps } from "../movie/interfaces";
import { RankProps } from "../rank/interfaces";

export const digimonSchema = `
  id
  name
`;

export interface DigimonProps {
  id: number;
  name: string;
  prior: DigimonProps[];
  next: DigimonProps[];
  rank: RankProps;
  attribute: AttributeProps;
  families: FamilyProps[];
  element: ElementProps;
  animes: AnimeProps[];
  episodes: EpisodeProps[];
  movies: MovieProps[];
  digimental: DigimentalProps;
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name";
}
