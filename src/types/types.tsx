export type movie = {
  id?: number;
  url?: string;
  title?: string;
  genres?: string;
  backdrop?: string;
  slug?: string;
  released_on?: string;
  poster?: string;
  imdb_rating?: string;
  length?: string;
  overview?: string;
  director?: any;
  cast?: any;
  error?: string;
};

export type moviesData = {
  movies: movie[];
};
