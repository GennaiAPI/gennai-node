import {
  GetFamilies,
  GetFamilyById,
  GetFamilyByName,
  familySchema,
} from "./interfaces";

import api from "../../api";

export const getFamilies = ({ options }: GetFamilies) =>
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

export const getFamilyById = ({ id }: GetFamilyById) =>
  api({
    operationName: "GetFamilyById",
    query: `query GetFamilyById($getFamilyByIdId: Int!) {  
      getFamilyById(id: $getFamilyByIdId) {
        ${familySchema}
      }
    }`,
    variables: {
      getFamilyByIdId: id,
    },
  });

export const getFamilyByName = ({ name }: GetFamilyByName) =>
  api({
    operationName: "GetFamilyByName",
    query: `query GetFamilyByName($getFamilyByNameName: String!) {  
      getFamilyByName(name: $getFamilyByNameName) {
        ${familySchema}
      }
    }`,
    variables: {
      getFamilyByNameName: name,
    },
  });
