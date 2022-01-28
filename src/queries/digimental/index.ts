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
    query: `query GetDigimentalById($getDigimentalByIdId: Int!) {  
      getDigimentalById(id: $getDigimentalByIdId) {
        ${digimentalSchema}
        crest {
          ${crestSchema}
        }
        digiDestined {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
        series {
          ${seriesSchema}
        }
        movies {
          ${movieSchema}
        }
      }
    }`,
    variables: {
      getDigimentalByIdId: id,
    },
  });

export const getDigimentalByName = (
  name: string
): Promise<DigimentalFullProps> =>
  api({
    operationName: "GetDigimentalByName",
    query: `query GetDigimentalByName($getDigimentalByNameName: String!) {  
      getDigimentalByName(name: $getDigimentalByNameName) {
        ${digimentalSchema}
        crest {
          ${crestSchema}
        }
        digiDestined {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
        series {
          ${seriesSchema}
        }
        movies {
          ${movieSchema}
        }
      }
    }`,
    variables: {
      getDigimentalByNameName: name,
    },
  });
