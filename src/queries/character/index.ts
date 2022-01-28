import {
  CharacterBasicProps,
  CharacterFullProps,
  OptionsProps,
  characterSchema,
} from "./interfaces";

import api from "../../api";
import { crestSchema } from "../crest/interfaces";
import { digimentalSchema } from "../digimental/interfaces";
import { digiviceSchema } from "../digivice/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { movieSchema } from "../movie/interfaces";
import { seriesSchema } from "../series/interfaces";
import { universeSchema } from "../universe/interfaces";

export const getCharacters = (
  options?: OptionsProps
): Promise<CharacterBasicProps[]> =>
  api({
    operationName: "GetCharacters",
    query: `query GetCharacters($options: OptionsInput) {  
      getCharacters(options: $options) {
        ${characterSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getCharacterById = (id: number): Promise<CharacterFullProps> =>
  api({
    operationName: "GetCharacterById",
    query: `query GetCharacterById($id: Int!) {  
      getCharacterById(id: $id) {
        ${characterSchema}
        series {
          ${seriesSchema}
        }
        digivices {
          ${digiviceSchema}
        }
        crests {
          ${crestSchema}
        }
        digimentals {
          ${digimentalSchema}
        }
        universes {
          ${universeSchema}
        }
        episodes {
          ${episodeSchema}
        }
        movies {
          ${movieSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getCharacterByName = (name: string): Promise<CharacterFullProps> =>
  api({
    operationName: "GetCharacterByName",
    query: `query GetCharacterByName($name: String!) {  
      getCharacterByName(name: $name) {
        ${characterSchema}
        series {
          ${seriesSchema}
        }
        digivices {
          ${digiviceSchema}
        }
        crests {
          ${crestSchema}
        }
        digimentals {
          ${digimentalSchema}
        }
        universes {
          ${universeSchema}
        }
        episodes {
          ${episodeSchema}
        }
        movies {
          ${movieSchema}
        }
      }
    }`,
    variables: {
      name: name,
    },
  });
