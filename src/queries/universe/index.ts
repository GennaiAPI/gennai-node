import { OptionsProps, UniverseProps, universeSchema } from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { movieSchema } from "../movie/interfaces";

export const getUniverses = (
  options?: OptionsProps
): Promise<UniverseProps[]> =>
  api({
    operationName: "GetUniverses",
    query: `query GetUniverses {  
      getUniverses {
        ${universeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getUniverseById = (id: number): Promise<UniverseProps> =>
  api({
    operationName: "GetUniverseById",
    query: `query GetUniverseById($getUniverseByIdId: Int!) {  
      getUniverseById(id: $getUniverseByIdId) {
        ${universeSchema}
        animes {
          ${animeSchema}
        }
        movies {
          ${movieSchema}
        }
        characters {
          ${characterSchema}
        }
      }
    }`,
    variables: {
      getUniverseByIdId: id,
    },
  });

export const getUniverseByName = (name: string): Promise<UniverseProps> =>
  api({
    operationName: "GetUniverseByName",
    query: `query GetUniverseByName($getUniverseByNameName: String!) {  
      getUniverseByName(name: $getUniverseByNameName) {
        ${universeSchema}
        animes {
          ${animeSchema}
        }
        movies {
          ${movieSchema}
        }
        characters {
          ${characterSchema}
        }
      }
    }`,
    variables: {
      getUniverseByNameName: name,
    },
  });
