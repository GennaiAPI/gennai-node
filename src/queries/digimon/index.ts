import {
  DigimonBasicProps,
  DigimonFullProps,
  OptionsProps,
  digimonSchema,
} from "./interfaces";

import api from "../../api";
import { attributeSchema } from "../attribute/interfaces";
import { digimentalSchema } from "../digimental/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { fieldSchema } from "../field/interfaces";
import { movieSchema } from "../movie/interfaces";
import { rankSchema } from "../rank/interfaces";
import { seriesSchema } from "../series/interfaces";
import { typeSchema } from "../type/interfaces";

export const getDigimons = (
  options?: OptionsProps
): Promise<DigimonBasicProps[]> =>
  api({
    operationName: "GetDigimons",
    query: `query GetDigimons($options: OptionsInput) {  
      getDigimons(options: $options) {
        ${digimonSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigimonById = (id: number): Promise<DigimonFullProps> =>
  api({
    operationName: "GetDigimonById",
    query: `query GetDigimonById($getDigimonByIdId: Int!) {  
      getDigimonById(id: $getDigimonByIdId) {
        ${digimonSchema}
        otherNames {
          lang
          name
        }
        prior {
          ${digimonSchema}
        }
        next {
          ${digimonSchema}
        }
        rank {
          ${rankSchema}
        }
        attribute {
          ${attributeSchema}
        }
        type {
          ${typeSchema}
        }
        fields {
          ${fieldSchema}
        }
        series {
          ${seriesSchema}
        }
        episodes {
          ${episodeSchema}
        }
        movies {
          ${movieSchema}
        }
        digimental {
          ${digimentalSchema}
        }
      }
    }`,
    variables: {
      getDigimonByIdId: id,
    },
  });

export const getDigimonByName = (name: string): Promise<DigimonFullProps> =>
  api({
    operationName: "GetDigimonByName",
    query: `query GetDigimonByName($getDigimonByNameName: String!) {  
      getDigimonByName(name: $getDigimonByNameName) {
        ${digimonSchema}
        otherNames {
          lang
          name
        }
        prior {
          ${digimonSchema}
        }
        next {
          ${digimonSchema}
        }
        rank {
          ${rankSchema}
        }
        attribute {
          ${attributeSchema}
        }
        type {
          ${typeSchema}
        }
        fields {
          ${fieldSchema}
        }
        series {
          ${seriesSchema}
        }
        episodes {
          ${episodeSchema}
        }
        movies {
          ${movieSchema}
        }
        digimental {
          ${digimentalSchema}
        }
      }
    }`,
    variables: {
      getDigimonByNameName: name,
    },
  });
