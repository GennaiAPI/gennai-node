import {
  OptionsProps,
  UniverseBasicProps,
  UniverseFullProps,
  universeSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { movieSchema } from "../movie/interfaces";
import { seriesSchema } from "../series/interfaces";

export const getUniverses = (
  options?: OptionsProps
): Promise<UniverseBasicProps[]> =>
  api({
    operationName: "GetUniverses",
    query: `query GetUniverses($options: OptionsInput) {  
      getUniverses(options: $options) {
        ${universeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getUniverseById = (id: number): Promise<UniverseFullProps> =>
  api({
    operationName: "GetUniverseById",
    query: `query GetUniverseById($id: Int!) {  
      getUniverseById(id: $id) {
        ${universeSchema}
        series {
          ${seriesSchema}
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
      id: id,
    },
  });

export const getUniverseByName = (name: string): Promise<UniverseFullProps> =>
  api({
    operationName: "GetUniverseByName",
    query: `query GetUniverseByName($name: String!) {  
      getUniverseByName(name: $name) {
        ${universeSchema}
        series {
          ${seriesSchema}
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
      name: name,
    },
  });
