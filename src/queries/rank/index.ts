import { OptionsProps, rankSchema } from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getRanks = (options?: OptionsProps) =>
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

export const getRankById = (id: number) =>
  api({
    operationName: "GetRankById",
    query: `query GetRankById($getRankByIdId: Int!) {  
      getRankById(id: $getRankByIdId) {
        ${rankSchema}
        digimons {
          ${digimonSchema}
        }
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
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getRankByNameName: name,
    },
  });
