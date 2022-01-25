import {
  OptionsProps,
  TypeBasicProps,
  TypeFullProps,
  typeSchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getTypes = (options?: OptionsProps): Promise<TypeBasicProps[]> =>
  api({
    operationName: "GetTypes",
    query: `query GetTypes($options: OptionsInput) {  
      getTypes(options: $options) {
        ${typeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getTypeById = (id: number): Promise<TypeFullProps> =>
  api({
    operationName: "GetTypeById",
    query: `query GetTypeById($getTypeByIdId: Int!) {  
      getTypeById(id: $getTypeByIdId) {
        ${typeSchema}
        strong {
          ${typeSchema}
        }
        weak {
          ${typeSchema}
        }
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getTypeByIdId: id,
    },
  });

export const getTypeByName = (name: string): Promise<TypeFullProps> =>
  api({
    operationName: "GetTypeByName",
    query: `query GetTypeByName($getTypeByNameName: String!) {  
      getTypeByName(name: $getTypeByNameName) {
        ${typeSchema}
        strong {
          ${typeSchema}
        }
        weak {
          ${typeSchema}
        }
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getTypeByNameName: name,
    },
  });
