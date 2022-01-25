import {
  FieldBasicProps,
  FieldFullProps,
  OptionsProps,
  fieldSchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getFields = (options?: OptionsProps): Promise<FieldBasicProps[]> =>
  api({
    operationName: "GetFields",
    query: `query GetFields($options: OptionsInput) {  
      getFields(options: $options) {
        ${fieldSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getFieldById = (id: number): Promise<FieldFullProps> =>
  api({
    operationName: "GetFieldById",
    query: `query GetFieldById($getFieldByIdId: Int!) {  
      getFieldById(id: $getFieldByIdId) {
        ${fieldSchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getFieldByIdId: id,
    },
  });

export const getFieldByName = (name: string): Promise<FieldFullProps> =>
  api({
    operationName: "GetFieldByName",
    query: `query GetFieldByName($getFieldByNameName: String!) {  
      getFieldByName(name: $getFieldByNameName) {
        ${fieldSchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getFieldByNameName: name,
    },
  });
