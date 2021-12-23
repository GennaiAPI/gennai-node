import { OptionsProps, familySchema } from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getFamilies = (options?: OptionsProps) =>
  api({
    operationName: "GetFamilies",
    query: `query GetFamilies {  
      getFamilies {
        ${familySchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getFamilyById = (id: number) =>
  api({
    operationName: "GetFamilyById",
    query: `query GetFamilyById($getFamilyByIdId: Int!) {  
      getFamilyById(id: $getFamilyByIdId) {
        ${familySchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getFamilyByIdId: id,
    },
  });

export const getFamilyByName = (name: string) =>
  api({
    operationName: "GetFamilyByName",
    query: `query GetFamilyByName($getFamilyByNameName: String!) {  
      getFamilyByName(name: $getFamilyByNameName) {
        ${familySchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getFamilyByNameName: name,
    },
  });
