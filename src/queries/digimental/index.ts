import {
  DigimentalBasicProps,
  DigimentalFullProps,
  OptionsProps,
  digimentalSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { crestSchema } from "../crest/interfaces";
import { digimonSchema } from "../digimon/interfaces";
import { movieSchema } from "../movie/interfaces";
import { seriesSchema } from "../series/interfaces";

export const getDigimentals = (
  options?: OptionsProps
): Promise<DigimentalBasicProps[]> =>
  api({
    operationName: "GetDigimentals",
    query: `query GetDigimentals($options: OptionsInput) {  
      getDigimentals(options: $options) {
        ${digimentalSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigimentalById = (id: number): Promise<DigimentalFullProps> =>
  api({
    operationName: "GetDigimentalById",
    query: `query GetDigimentalById($id: Int!) {  
      getDigimentalById(id: $id) {
        ${digimentalSchema}
        crest {
          ${crestSchema}
        }
        digimon {
          ${digimonSchema}
        }
        digiDestined {
          ${characterSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getDigimentalByName = (
  name: string
): Promise<DigimentalFullProps> =>
  api({
    operationName: "GetDigimentalByName",
    query: `query GetDigimentalByName($name: String!) {  
      getDigimentalByName(name: $name) {
        ${digimentalSchema}
        crest {
          ${crestSchema}
        }
        digimon {
          ${digimonSchema}
        }
        digiDestined {
          ${characterSchema}
        }
      }
    }`,
    variables: {
      name: name,
    },
  });
