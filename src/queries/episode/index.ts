import {
  EpisodeBasicProps,
  EpisodeFullProps,
  OptionsProps,
  episodeSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimonSchema } from "../digimon/interfaces";
import { seriesSchema } from "../series/interfaces";

export const getEpisodes = (
  options?: OptionsProps
): Promise<EpisodeBasicProps[]> =>
  api({
    operationName: "GetEpisodes",
    query: `query GetEpisodes($options: OptionsInput) {  
      getEpisodes(options: $options) {
        ${episodeSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getEpisodeById = (id: number): Promise<EpisodeFullProps> =>
  api({
    operationName: "GetEpisodeById",
    query: `query GetEpisodeById($id: Int!) {  
      getEpisodeById(id: $id) {
        ${episodeSchema}
        series {
          ${seriesSchema}
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
      id: id,
    },
  });

export const getEpisodeByTitle = (title: string): Promise<EpisodeFullProps> =>
  api({
    operationName: "GetEpisodeByTitle",
    query: `query GetEpisodeByTitle($title: String!) {  
      getEpisodeByTitle(title: $title) {
        ${episodeSchema}
        series {
          ${seriesSchema}
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
      title: title,
    },
  });
