import { GetRankById, GetRankByName, GetRanks, rankSchema } from "./interfaces";

import api from "src/api";

export const getRanks = ({ options }: GetRanks) =>
  api({
    operationName: "GetRanks",
    query: `query GetRanks {  
      getRanks {
        ${rankSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getRankById = ({ id }: GetRankById) =>
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

export const getRankByName = ({ name }: GetRankByName) =>
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
