import { CharacterBasicProps } from "../character/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";

export const digimentalSchema = `
  id
  name
  description
`;

export interface DigimentalBasicProps {
  id: number;
  name: string;
  description: string;
}

export interface DigimentalFullProps {
  id: number;
  name: string;
  description: string;
  digiDestined: CharacterBasicProps;
  digimons: DigimonBasicProps[];
  crest: CrestBasicProps;
}

export interface OptionsProps {
  offset: number;
  limit: number;
  order: string;
  orderBy: "id" | "name" | "description";
}
