import { DigiviceType, OptionsProps, digiviceSchema } from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { movieSchema } from "../movie/interfaces";

export const getDigivices = (options?: OptionsProps) =>
  api({
    operationName: "GetDigivices",
    query: `query GetDigivices {  
      getDigivices {
        ${digiviceSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigiviceById = (id: number) =>
  api({
    operationName: "GetDigiviceById",
    query: `query GetDigiviceById($getDigiviceByIdId: Int!) {  
      getDigiviceById(id: $getDigiviceByIdId) {
        ${digiviceSchema}
        digiDestined {
          ${characterSchema}
        }
        animes {
          ${animeSchema}
        }
        movies {
          ${movieSchema}
        }
      }
    }`,
    variables: {
      getDigiviceByIdId: id,
    },
  });

export const getDigivicesByType = (
  type: DigiviceType,
  options?: OptionsProps
) =>
  api({
    operationName: "GetDigivicesByType",
    query: `query GetDigivicesByType($getDigivicesByTypeType: DigiviceType!) {  
      getDigivicesByType(type: $getDigivicesByTypeType) {
        ${digiviceSchema}
        digiDestined {
          ${characterSchema}
        }
        animes {
          ${animeSchema}
        }
        movies {
          ${movieSchema}
        }
      }
    }`,
    variables: {
      getDigivicesByTypeType: type,
      options: options,
    },
  });

export const getDigiviceTypes = () =>
  api({
    operationName: "GetDigiviceTypes",
    query: `query GetDigiviceTypes {  
      getDigiviceTypes
    }`,
    variables: {},
  });
