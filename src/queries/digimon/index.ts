import {
  DigimonBasicProps,
  DigimonFullProps,
  OptionsProps,
  digimonSchema,
} from "./interfaces";

import api from "../../api";
import { attributeSchema } from "../attribute/interfaces";
import { characterSchema } from "../character/interfaces";
import { digimentalSchema } from "../digimental/interfaces";
import { digimonGroupSchema } from "../digimonGroup/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { fieldSchema } from "../field/interfaces";
import { movieSchema } from "../movie/interfaces";
import { rankSchema } from "../rank/interfaces";
import { seriesSchema } from "../series/interfaces";
import { spiritSchema } from "../spirit/interfaces";
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
    query: `query GetDigimonById($id: Int!) {  
      getDigimonById(id: $id) {
        ${digimonSchema}
        rank {
          ${rankSchema}
        }
        attribute {
          ${attributeSchema}
        }
        type {
          ${typeSchema}
        }
        digimental {
          ${digimentalSchema}
        }
        movies {
          ${movieSchema}
        }
        series {
          ${seriesSchema}
        }
        episodes {
          ${episodeSchema}
        }
        fields {
          ${fieldSchema}
        }
        spirits {
          ${spiritSchema}
        }
        partners {
          ${characterSchema}
        }
        previous {
          ${digimonSchema}
        }
        next {
          ${digimonSchema}
        }
        groups {
          ${digimonGroupSchema}
        }
        otherNames {
          lang
          name
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getDigimonByName = (name: string): Promise<DigimonFullProps> =>
  api({
    operationName: "GetDigimonByName",
    query: `query GetDigimonByName($name: String!) {  
      getDigimonByName(name: $name) {
        ${digimonSchema}
        rank {
          ${rankSchema}
        }
        attribute {
          ${attributeSchema}
        }
        type {
          ${typeSchema}
        }
        digimental {
          ${digimentalSchema}
        }
        movies {
          ${movieSchema}
        }
        series {
          ${seriesSchema}
        }
        episodes {
          ${episodeSchema}
        }
        fields {
          ${fieldSchema}
        }
        spirits {
          ${spiritSchema}
        }
        partners {
          ${characterSchema}
        }
        previous {
          ${digimonSchema}
        }
        next {
          ${digimonSchema}
        }
        groups {
          ${digimonGroupSchema}
        }
        otherNames {
          lang
          name
        }
      }
    }`,
    variables: {
      name: name,
    },
  });
