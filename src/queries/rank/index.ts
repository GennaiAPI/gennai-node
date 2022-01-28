import {
  OptionsProps,
  RankBasicProps,
  RankFullProps,
  rankSchema,
} from "./interfaces";

import api from "../../api";
import { digimonSchema } from "../digimon/interfaces";

export const getRanks = (options?: OptionsProps): Promise<RankBasicProps[]> =>
  api({
    operationName: "GetRanks",
    query: `query GetRanks($options: OptionsInput) {  
      getRanks(options: $options) {
        ${rankSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getRankById = (id: number): Promise<RankFullProps> =>
  api({
    operationName: "GetRankById",
    query: `query GetRankById($id: Int!) {  
      getRankById(id: $id) {
        ${rankSchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getRankByName = (name: string): Promise<RankFullProps> =>
  api({
    operationName: "GetRankByName",
    query: `query GetRankByName($name: String!) {  
      getRankByName(name: $name) {
        ${rankSchema}
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      name: name,
    },
  });
