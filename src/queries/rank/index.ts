import api from "src/api";

const rankSchema = `
  id
  name
  description
`;

export const getRanks = () =>
  api({
    operationName: "GetRanks",
    query: `query GetRanks {  
      getRanks {
        ${rankSchema}
      }
    }`,
    variables: {},
  });

export const getRankById = (id: number) =>
  api({
    operationName: "GetRankById",
    query: `query GetRankById($getRankByIdId: Int!) {  
      getRankById(id: $getRankByIdId) {
        ${rankSchema}
      }
    }`,
    variables: {
      getRankByIdId: id,
    },
  });

export const getRankByName = (name: string) =>
  api({
    operationName: "GetRankByName",
    query: `query GetRankByName($getRankByNameName: String!) {  
      getRankByName(name: $getRankByNameName) {
        ${rankSchema}
      }
    }`,
    variables: {
      getRankByNameName: name,
    },
  });
