import { CharacterBasicProps } from "../character/interfaces";
import { CrestBasicProps } from "../crest/interfaces";
import { DigimonBasicProps } from "../digimon/interfaces";

export const digimentalSchema = `
  id
  name
  description
  attribute
`;

export interface DigimentalBasicProps {
  id: number;
  name: string;
  description: string;
  attribute: string;
}

export interface DigimentalFullProps {
  id: number;
  name: string;
  description: string;
  attribute: string;
  crest: CrestBasicProps;
  digimon: DigimonBasicProps[];
  digiDestined: CharacterBasicProps;
}

export interface OptionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  orderBy?: "id" | "name" | "description" | "attribute";
}
