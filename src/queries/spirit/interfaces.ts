import { CharacterBasicProps } from "../character/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";

export const spiritSchema = `
  id
  element
  isHuman
`;

export interface SpiritBasicProps {
  id: number;
  element: SpiritElement;
  isHuman: boolean;
}

export interface SpiritFullProps {
  id: number;
  element: SpiritElement;
  isHuman: boolean;
  digiDestined: CharacterBasicProps;
  digimon: DigimonBasicProps;
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "element" | "isHuman";
}

export enum SpiritElement {
  FLAME,
  LIGHT,
  ICE,
  WIND,
  THUNDER,
  EARTH,
  WOOD,
  WATER,
  STEEL,
  DARKNESS,
}
