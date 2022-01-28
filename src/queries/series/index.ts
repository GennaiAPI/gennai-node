import {
  OptionsProps,
  SeriesBasicProps,
  SeriesFullProps,
  seriesSchema,
} from "./interfaces";

import api from "../../api";
import { characterSchema } from "../character/interfaces";
import { crestSchema } from "../crest/interfaces";
import { digimentalSchema } from "../digimental/interfaces";
import { digimonSchema } from "../digimon/interfaces";
import { digiviceSchema } from "../digivice/interfaces";
import { episodeSchema } from "../episode/interfaces";
import { universeSchema } from "../universe/interfaces";

export const getSeries = (
  options?: OptionsProps
): Promise<SeriesBasicProps[]> =>
  api({
    operationName: "GetSeries",
    query: `query GetSeries($options: OptionsInput) {  
      getSeries(options: $options) {
        ${seriesSchema}
      }
    }`,
    variables: {
      options: options,
    },
  });

export const getSeriesById = (id: number): Promise<SeriesFullProps> =>
  api({
    operationName: "GetSeriesById",
    query: `query GetSeriesById($id: Int!) {  
      getSeriesById(id: $id) {
        ${seriesSchema}
        universe {
          ${universeSchema}
        }
        crests {
          ${crestSchema}
        }
        digimentals {
          ${digimentalSchema}
        }
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
      }
    }`,
    variables: {
      id: id,
    },
  });

export const getSeriesByTitle = (title: string): Promise<SeriesFullProps> =>
  api({
    operationName: "GetSeriesByTitle",
    query: `query GetSeriesByTitle($title: String!) {  
      getSeriesByTitle(title: $title) {
        ${seriesSchema}
        universe {
          ${universeSchema}
        }
        crests {
          ${crestSchema}
        }
        digimentals {
          ${digimentalSchema}
        }
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
      }
    }`,
    variables: {
      title: title,
    },
  });
