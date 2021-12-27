import {
  ElementBasicProps,
  ElementFullProps,
  OptionsProps,
  elementSchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getElements = (
  options?: OptionsProps
): Promise<ElementBasicProps[]> =>
  api({
    operationName: "GetElements",
    query: `query GetElements {  
      getElements {
        ${elementSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getElementById = (id: number): Promise<ElementFullProps> =>
  api({
    operationName: "GetElementById",
    query: `query GetElementById($getElementByIdId: Int!) {  
      getElementById(id: $getElementByIdId) {
        ${elementSchema}
        strong {
          ${elementSchema}
        }
        weak {
          ${elementSchema}
        }
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getElementByIdId: id,
    },
  });

export const getElementByName = (name: string): Promise<ElementFullProps> =>
  api({
    operationName: "GetElementByName",
    query: `query GetElementByName($getElementByNameName: String!) {  
      getElementByName(name: $getElementByNameName) {
        ${elementSchema}
        strong {
          ${elementSchema}
        }
        weak {
          ${elementSchema}
        }
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getElementByNameName: name,
    },
  });