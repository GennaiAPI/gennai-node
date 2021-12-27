import { AnimeBasicProps } from "../anime/interfaces";
import { AttributeBasicProps } from "../attribute/interfaces";
import { DigimentalBasicProps } from "../digimental/interfaces";
import { ElementBasicProps } from "../element/interfaces";
import { EpisodeBasicProps } from "../episode/interfaces";
import { FamilyBasicProps } from "../family/interfaces";
import { MovieBasicProps } from "../movie/interfaces";
import { RankBasicProps } from "../rank/interfaces";

export const digimonSchema = `
  id
  name
`;

export interface DigimonBasicProps {
  id: number;
  name: string;
}
export interface DigimonFullProps {
  id: number;
  name: string;
  prior: DigimonBasicProps[];
  next: DigimonBasicProps[];
  rank: RankBasicProps;
  attribute: AttributeBasicProps;
  families: FamilyBasicProps[];
  element: ElementBasicProps;
  animes: AnimeBasicProps[];
  episodes: EpisodeBasicProps[];
  movies: MovieBasicProps[];
  digimental: DigimentalBasicProps;
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name";
}
