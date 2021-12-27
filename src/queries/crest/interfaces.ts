import { AnimeProps } from "../anime/interfaces";
import { CharacterProps } from "../character/interfaces";
import { DigimentalProps } from "../digimental/interfaces";

export const crestSchema = `
  id
  name
  description
`;

export interface CrestProps {
  id: number;
  name: string;
  description: string;
  digiDestined: CharacterProps;
  animes: AnimeProps[];
  digimental: DigimentalProps;
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "description";
}
