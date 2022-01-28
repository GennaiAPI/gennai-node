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
    query: `query GetTypeById($id: Int!) {  
      getTypeById(id: $id) {
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
      id: id,
    },
  });

export const getTypeByName = (name: string): Promise<TypeFullProps> =>
  api({
    operationName: "GetTypeByName",
    query: `query GetTypeByName($name: String!) {  
      getTypeByName(name: $name) {
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
      name: name,
    },
  });
