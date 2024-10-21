import { fetchFilms } from "../../service/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchFilms();
      setFilms(response);
    };
    fetchMovies();
  }, []);
  return (
    <>
      <MovieList movies={films} />
    </>
  );
}
