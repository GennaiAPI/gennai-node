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
    query: `query GetFieldById($id: Int!) {  
      getFieldById(id: $id) {
        ${fieldSchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getFieldByName = (name: string): Promise<FieldFullProps> =>
  api({
    operationName: "GetFieldByName",
    query: `query GetFieldByName($name: String!) {  
      getFieldByName(name: $name) {
        ${fieldSchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      name: name,
    },
  });
