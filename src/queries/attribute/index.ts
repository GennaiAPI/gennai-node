import {
  AttributeBasicProps,
  AttributeFullProps,
  OptionsProps,
  attributeSchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getAttributes = (
  options?: OptionsProps
): Promise<AttributeBasicProps[]> =>
  api({
    operationName: "GetAttributes",
    query: `query GetAttributes($options: OptionsInput) {  
      getAttributes(options: $options) {
        ${attributeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getAttributeById = (id: number): Promise<AttributeFullProps> =>
  api({
    operationName: "GetAttributeById",
    query: `query GetAttributeById($id: Int!) {  
      getAttributeById(id: $id) {
        ${attributeSchema}
        strong {
          ${attributeSchema}
        }
        weak {
          ${attributeSchema}
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

export const getAttributeByName = (name: string): Promise<AttributeFullProps> =>
  api({
    operationName: "GetAttributeByName",
    query: `query GetAttributeByName($name: String!) {  
      getAttributeByName(name: $name) {
        ${attributeSchema}
        strong {
          ${attributeSchema}
        }
        weak {
          ${attributeSchema}
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
