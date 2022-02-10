import {
  MovieBasicProps,
  MovieFullProps,
  OptionsProps,
  movieSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { digimonSchema } from "../digimon/interfaces";
import { universeSchema } from "../universe/interfaces";

export const getMovies = (options?: OptionsProps): Promise<MovieBasicProps[]> =>
  api({
    operationName: "GetMovies",
    query: `query GetMovies($options: OptionsInput) {  
      getMovies(options: $options) {
        ${movieSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getMovieById = (id: number): Promise<MovieFullProps> =>
  api({
    operationName: "GetMovieById",
    query: `query GetMovieById($id: Int!) {  
      getMovieById(id: $id) {
        ${movieSchema}
        digimons {
          ${digimonSchema}
        }
        characters {
          ${characterSchema}
        }
        universe {
          ${universeSchema}
        }
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getMovieByTitle = (title: string): Promise<MovieFullProps> =>
  api({
    operationName: "GetMovieByTitle",
    query: `query GetMovieByTitle($title: String!) {  
      getMovieByTitle(title: $title) {
        ${movieSchema}
        digimons {
          ${digimonSchema}
        }
        characters {
          ${characterSchema}
        }
        universe {
          ${universeSchema}
        }
      }
    }`,
    variables: {
      title: title,
    },
  });
