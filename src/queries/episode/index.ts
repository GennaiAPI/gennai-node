import { EpisodeProps, OptionsProps, episodeSchema } from "./interfaces";

import { animeSchema } from "../anime/interfaces";
import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimonSchema } from "../digimon/interfaces";

export const getEpisodes = (options?: OptionsProps): Promise<EpisodeProps[]> =>
  api({
    operationName: "GetEpisodes",
    query: `query GetEpisodes {  
      getEpisodes {
        ${episodeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getEpisodeById = (id: number): Promise<EpisodeProps> =>
  api({
    operationName: "GetEpisodeById",
    query: `query GetEpisodeById($getEpisodeByIdId: Int!) {  
      getEpisodeById(id: $getEpisodeByIdId) {
        ${episodeSchema}
        anime {
          ${animeSchema}
        }
        characters {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getEpisodeByIdId: id,
    },
  });

export const getEpisodeByTitle = (title: string): Promise<EpisodeProps> =>
  api({
    operationName: "GetEpisodeByTitle",
    query: `query GetEpisodeByTitle($getEpisodeByTitleTitle: String!) {  
      getEpisodeByTitle(title: $getEpisodeByTitleTitle) {
        ${episodeSchema}
        anime {
          ${animeSchema}
        }
        characters {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
      }
    }`,
    variables: {
      getEpisodeByTitleTitle: title,
    },
  });
