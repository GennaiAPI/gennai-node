import {
  CharacterBasicProps,
  CharacterFullProps,
  OptionsProps,
  characterSchema,
} from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { crestSchema } from "../crest/interfaces";
import { digimentalSchema } from "../digimental/interfaces";
import { digiviceSchema } from "../digivice/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { movieSchema } from "../movie/interfaces";
import { universeSchema } from "../universe/interfaces";

export const getCharacters = (
  options?: OptionsProps
): Promise<CharacterBasicProps[]> =>
  api({
    operationName: "GetCharacters",
    query: `query GetCharacters {  
      getCharacters {
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
    query: `query GetCharacterById($getCharacterByIdId: Int!) {  
      getCharacterById(id: $getCharacterByIdId) {
        ${characterSchema}
        animes {
          ${animeSchema}
        }
        digivices {
          ${digiviceSchema}
        }
        crest {
          ${crestSchema}
        }
        digimental {
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
      getCharacterByIdId: id,
    },
  });

export const getCharacterByName = (name: string): Promise<CharacterFullProps> =>
  api({
    operationName: "GetCharacterByName",
    query: `query GetCharacterByName($getCharacterByNameName: String!) {  
      getCharacterByName(name: $getCharacterByNameName) {
        ${characterSchema}
        animes {
          ${animeSchema}
        }
        digivices {
          ${digiviceSchema}
        }
        crest {
          ${crestSchema}
        }
        digimental {
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
      getCharacterByNameName: name,
    },
  });
