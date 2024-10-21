import axios from "axios";

const API_KEY = "e020a23d73a0866f601c46769a0a4294";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDIwYTIzZDczYTA4NjZmNjAxYzQ2NzY5YTBhNDI5NCIsIm5iZiI6MTcyOTI3NTU3Mi40OTMxNzUsInN1YiI6IjY3MTI5ZDU3MjVjNzBiOGIxZDY3ZDNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4EC5lc0NdJqPLYlpEtN6JswpaaLZe2m67E1-dIB_DCI";

export async function fetchFilms() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  return data.results;
}

export async function fetchFilmDetails(movieID) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  return data;
}

export async function fetchFilmActors(movieID) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  return data;
}

export async function fetchFilmReviews(movieID) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  return data;
}

export async function fetchFilmsByQuery(query) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  return data.results;
}
