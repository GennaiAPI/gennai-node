import { CharacterBasicProps } from "../character/interfaces";

export const digiviceSchema = `
  id
  type
  colors
`;

export interface DigiviceBasicProps {
  id: number;
  colors: string[];
  type: DigiviceType;
}

export interface DigiviceFullProps {
  id: number;
  colors: string[];
  type: DigiviceType;
  digiDestined: CharacterBasicProps;
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "type" | "colors";
}

export enum DigiviceType {
  CLASSIC,
  D_3,
  D_ARK,
  D_SCANNER,
  IC,
  BURST,
  DARK,
  BIO_HYBRID,
}
