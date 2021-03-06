import {
  DigiviceBasicProps,
  DigiviceFullProps,
  DigiviceType,
  OptionsProps,
  digiviceSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { movieSchema } from "../movie/interfaces";
import { seriesSchema } from "../series/interfaces";

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
    query: `query GetDigiviceById($id: Int!) {  
      getDigiviceById(id: $id) {
        ${digiviceSchema}
        digiDestined {
          ${characterSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getDigivicesByType = (
  type: DigiviceType,
  options?: OptionsProps
): Promise<DigiviceBasicProps[]> =>
  api({
    operationName: "GetDigivicesByType",
    query: `query GetDigivicesByType($type: DigiviceType!, $options: OptionsInput) {  
      getDigivicesByType(type: $type, options: $options) {
        ${digiviceSchema}
        digiDestined {
          ${characterSchema}
        }
      }
    }`,
    variables: {
      type: type,
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
