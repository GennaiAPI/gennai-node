import { MovieProps, OptionsProps, movieSchema } from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimonSchema } from "../digimon/interfaces";
import { digiviceSchema } from "../digivice/interfaces";
import { universeSchema } from "../universe/interfaces";

export const getMovies = (options?: OptionsProps): Promise<MovieProps[]> =>
  api({
    operationName: "GetMovies",
    query: `query GetMovies {  
      getMovies {
        ${movieSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getMovieById = (id: number): Promise<MovieProps> =>
  api({
    operationName: "GetMovieById",
    query: `query GetMovieById($getMovieByIdId: Int!) {  
      getMovieById(id: $getMovieByIdId) {
        ${movieSchema}
        universe {
          ${universeSchema}
        }
        characters {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
        digivices {
          ${digiviceSchema}
        }
      }
    }`,
    variables: {
      getMovieByIdId: id,
    },
  });

export const getMovieByTitle = (title: string): Promise<MovieProps> =>
  api({
    operationName: "GetMovieByTitle",
    query: `query GetMovieByTitle($getMovieByTitleTitle: String!) {  
      getMovieByTitle(title: $getMovieByTitleTitle) {
        ${movieSchema}
        universe {
          ${universeSchema}
        }
        characters {
          ${characterSchema}
        }
        digimons {
          ${digimonSchema}
        }
        digivices {
          ${digiviceSchema}
        }
      }
    }`,
    variables: {
      getMovieByTitleTitle: title,
    },
  });
