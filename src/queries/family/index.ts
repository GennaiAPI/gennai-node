import api from "src/api";

const familySchema = `
  id
  name
  symbol
  description
`;

export const getFamilies = () =>
  api({
    operationName: "GetFamilies",
    query: `query GetFamilies {  
      getFamilies {
        ${familySchema}
      }
    }`,
    variables: {},
  });

export const getFamilyById = (id: number) =>
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

export const getFamilyByName = (name: string) =>
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
