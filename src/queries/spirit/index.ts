import {
  OptionsProps,
  SpiritBasicProps,
  SpiritElement,
  SpiritFullProps,
  spiritSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimonSchema } from "../digimon/interfaces";

export const getSpirits = (
  options?: OptionsProps
): Promise<SpiritBasicProps[]> =>
  api({
    operationName: "GetSpirits",
    query: `query GetSpirits($options: OptionsInput) {  
      getSpirits(options: $options) {
        ${spiritSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getSpiritById = (id: number): Promise<SpiritFullProps> =>
  api({
    operationName: "GetSpiritById",
    query: `query GetSpiritById($id: Int!) {  
      getSpiritById(id: $id) {
        ${spiritSchema}
        digiDestined {
          ${characterSchema}
        }
        digimon {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getSpiritsByElement = (
  element: SpiritElement,
  options?: OptionsProps
): Promise<SpiritFullProps> =>
  api({
    operationName: "GetSpiritsByElement",
    query: `query GetSpiritsByElement($element: SpiritElement!, $options: OptionsInput) {  
      getSpiritsByElement(element: $element) {
        ${spiritSchema}
        digiDestined {
          ${characterSchema}
        }
        digimon {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      element: element,
      options: options,
    },
  });

export const getSpiritElements = (): Promise<SpiritElement[]> =>
  api({
    operationName: "GetSpiritElements",
    query: `query GetSpiritElements {  
      getSpiritElements
    }`,
    variables: {},
  });
