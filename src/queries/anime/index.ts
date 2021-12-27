import {
  AnimeBasicProps,
  AnimeFullProps,
  OptionsProps,
  animeSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { crestSchema } from "../crest/interfaces";
import { digimonSchema } from "../digimon/interfaces";
import { digiviceSchema } from "../digivice/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { universeSchema } from "../universe/interfaces";

export const getAnimes = (options?: OptionsProps): Promise<AnimeBasicProps[]> =>
  api({
    operationName: "GetAnimes",
    query: `query GetAnimes {  
      getAnimes {
        ${animeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getAnimeById = (id: number): Promise<AnimeFullProps> =>
  api({
    operationName: "GetAnimeById",
    query: `query GetAnimeById($getAnimeByIdId: Int!) {  
      getAnimeById(id: $getAnimeByIdId) {
        ${animeSchema}
        episodes {
          ${episodeSchema}
        }
        digimons {
          ${digimonSchema}
        }
        digivices {
          ${digiviceSchema}
        }
        characters {
          ${characterSchema}
        }
        crests {
          ${crestSchema}
        }
        universe {
          ${universeSchema}
        }
      }
    }`,
    variables: {
      getAnimeByIdId: id,
    },
  });

export const getAnimeByTitle = (title: string): Promise<AnimeFullProps> =>
  api({
    operationName: "GetAnimeByTitle",
    query: `query GetAnimeByTitle($getAnimeByTitleTitle: String!) {  
      getAnimeByTitle(title: $getAnimeByTitleTitle) {
        ${animeSchema}
        episodes {
          ${episodeSchema}
        }
        digimons {
          ${digimonSchema}
        }
        digivices {
          ${digiviceSchema}
        }
        characters {
          ${characterSchema}
        }
        crests {
          ${crestSchema}
        }
        universe {
          ${universeSchema}
        }
      }
    }`,
    variables: {
      getAnimeByTitleTitle: title,
    },
  });
