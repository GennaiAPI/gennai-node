import {
  CrestBasicProps,
  CrestFullProps,
  OptionsProps,
  crestSchema,
} from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimentalSchema } from "../digimental/interfaces";

export const getCrests = (options?: OptionsProps): Promise<CrestBasicProps[]> =>
  api({
    operationName: "GetCrests",
    query: `query GetCrests($options: OptionsInput) {  
      getCrests(options: $options) {
        ${crestSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getCrestById = (id: number): Promise<CrestFullProps> =>
  api({
    operationName: "GetCrestById",
    query: `query GetCrestById($getCrestByIdId: Int!) {  
      getCrestById(id: $getCrestByIdId) {
        ${crestSchema}
        digiDestined {
          ${characterSchema}
        }
        animes {
          ${animeSchema}
        }
        digimental {
          ${digimentalSchema}
        }
      }
    }`,
    variables: {
      getCrestByIdId: id,
    },
  });

export const getCrestByName = (name: string): Promise<CrestFullProps> =>
  api({
    operationName: "GetCrestByName",
    query: `query GetCrestByName($getCrestByNameName: String!) {  
      getCrestByName(name: $getCrestByNameName) {
        ${crestSchema}
        digiDestined {
          ${characterSchema}
        }
        animes {
          ${animeSchema}
        }
        digimental {
          ${digimentalSchema}
        }
      }
    }`,
    variables: {
      getCrestByNameName: name,
    },
  });
