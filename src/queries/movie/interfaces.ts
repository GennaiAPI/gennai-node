import { CharacterBasicProps } from "../character/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";
import { DigiviceBasicProps } from "../digivice/interfaces";
import { UniverseBasicProps } from "../universe/interfaces";

export const movieSchema = `
  id
  title
  synopsis
  originalAirDate
`;

export interface MovieBasicProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
}

export interface MovieFullProps {
  id: number;
  title: string;
  synopsis: string;
  originalAirDate: Date;
  universe: UniverseBasicProps;
  characters: CharacterBasicProps[];
  digimons: DigimonBasicProps[];
  digivices: DigiviceBasicProps[];
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "title" | "synopsis" | "originalAirDate";
}
