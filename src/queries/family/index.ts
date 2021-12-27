import {
  FamilyBasicProps,
  FamilyFullProps,
  OptionsProps,
  familySchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getFamilies = (
  options?: OptionsProps
): Promise<FamilyBasicProps[]> =>
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

export const getFamilyById = (id: number): Promise<FamilyFullProps> =>
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

export const getFamilyByName = (name: string): Promise<FamilyFullProps> =>
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
