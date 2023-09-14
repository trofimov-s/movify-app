import {
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
  ProductionStatus,
} from '../movie-shared';

export interface MovieOverview {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // Date
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends Omit<MovieOverview, 'genre_ids'> {
  belongs_to_collection: unknown; // null !
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  imdb_id: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  revenue: number; // $
  runtime: number;
  spoken_languages: Array<SpokenLanguage>;
  status: ProductionStatus;
  tagline: string;
}
