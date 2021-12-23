import { OptionsProps, digimonSchema } from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { attributeSchema } from "../attribute/interfaces";
import { digimentalSchema } from "../digimental/interfaces";
import { elementSchema } from "../element/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { familySchema } from "../family/interfaces";
import { movieSchema } from "../movie/interfaces";
import { rankSchema } from "../rank/interfaces";

export const getDigimons = (options?: OptionsProps) =>
  api({
    operationName: "GetDigimons",
    query: `query GetDigimons {  
      getDigimons {
        ${digimonSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigimonById = (id: number) =>
  api({
    operationName: "GetDigimonById",
    query: `query GetDigimonById($getDigimonByIdId: Int!) {  
      getDigimonById(id: $getDigimonByIdId) {
        ${digimonSchema}
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
        element {
          ${elementSchema}
        }
        families {
          ${familySchema}
        }
        animes {
          ${animeSchema}
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

export const getDigimonByName = (name: string) =>
  api({
    operationName: "GetDigimonByName",
    query: `query GetDigimonByName($getDigimonByNameName: String!) {  
      getDigimonByName(name: $getDigimonByNameName) {
        ${digimonSchema}
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
        element {
          ${elementSchema}
        }
        families {
          ${familySchema}
        }
        animes {
          ${animeSchema}
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
