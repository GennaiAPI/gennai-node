import {
  DigiviceBasicProps,
  DigiviceFullProps,
  DigiviceType,
  OptionsProps,
  digiviceSchema,
} from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { movieSchema } from "../movie/interfaces";

export const getDigivices = (
  options?: OptionsProps
): Promise<DigiviceBasicProps[]> =>
  api({
    operationName: "GetDigivices",
    query: `query GetDigivices($options: OptionsInput) {  
      getDigivices(options: $options) {
        ${digiviceSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigiviceById = (id: number): Promise<DigiviceFullProps> =>
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
): Promise<DigiviceBasicProps[]> =>
  api({
    operationName: "GetDigivicesByType",
    query: `query GetDigivicesByType($getDigivicesByTypeType: DigiviceType!, $options: OptionsInput) {  
      getDigivicesByType(type: $getDigivicesByTypeType, options: $options) {
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

export const getDigiviceTypes = (): Promise<DigiviceType[]> =>
  api({
    operationName: "GetDigiviceTypes",
    query: `query GetDigiviceTypes {  
      getDigiviceTypes
    }`,
    variables: {},
  });
