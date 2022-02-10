import {
  DigimonGroupBasicProps,
  DigimonGroupFullProps,
  OptionsProps,
  digimonGroupSchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getDigimonGroups = (
  options?: OptionsProps
): Promise<DigimonGroupBasicProps[]> =>
  api({
    operationName: "GetDigimonGroups",
    query: `query GetDigimonGroups($options: OptionsInput) {  
      getDigimonGroups(options: $options) {
        ${digimonGroupSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getDigimonGroupById = (
  id: number
): Promise<DigimonGroupFullProps> =>
  api({
    operationName: "GetDigimonGroupById",
    query: `query GetDigimonGroupById($id: Int!) {  
      getDigimonGroupById(id: $id) {
        ${digimonGroupSchema}
        digimon {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getDigimonGroupByName = (
  name: string
): Promise<DigimonGroupFullProps> =>
  api({
    operationName: "GetDigimonGroupByName",
    query: `query GetDigimonGroupByName($name: String!) {  
      getDigimonGroupByName(name: $name) {
        ${digimonGroupSchema}
        digimon {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      name: name,
    },
  });
