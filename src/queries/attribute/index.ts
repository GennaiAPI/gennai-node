import { OptionsProps, attributeSchema } from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getAttributes = (options?: OptionsProps) =>
  api({
    operationName: "GetAttributes",
    query: `query GetAttributes {  
      getAttributes {
        ${attributeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getAttributeById = (id: number) =>
  api({
    operationName: "GetAttributeById",
    query: `query GetAttributeById($getAttributeByIdId: Int!) {  
      getAttributeById(id: $getAttributeByIdId) {
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
      getAttributeByIdId: id,
    },
  });

export const getAttributeByName = (name: string) =>
  api({
    operationName: "GetAttributeByName",
    query: `query GetAttributeByName($getAttributeByNameName: String!) {  
      getAttributeByName(name: $getAttributeByNameName) {
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
      getAttributeByNameName: name,
    },
  });
