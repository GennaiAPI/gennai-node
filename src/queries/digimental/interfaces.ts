import { CharacterProps } from "../character/interfaces";
import { CrestProps } from "../crest/interfaces";
import { DigimonProps } from "../digimon/interfaces";

export const digimentalSchema = `
  id
  name
  description
`;

export interface DigimentalProps {
  id: number;
  name: string;
  description: string;
  digiDestined: CharacterProps;
  digimons: DigimonProps[];
  crest: CrestProps;
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "description";
}
