export type movie = {
  id?: number;
  url?: string;
  title?: string;
  genres?: string;
  backdrop?: string;
  slug?: string;
  error?: string;
};

export type moviesData = {
  movies: movie[];
};
