import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchFilmDetails } from "../../service/api";
import { useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");
  const [film, setFilm] = useState(null);
  const { movieID } = useParams();

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieDetails = await fetchFilmDetails(movieID);
        setFilm(movieDetails);
      } catch (error) {
        alert("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [movieID]);

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate(backLink.current);
        }}
      >
        Back
      </button>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : defaultImg
        }
        alt=""
        width={250}
      />
      <h3>Overview</h3>
      <p>{film.overview}</p>
      <p>Release date: {film.release_date}</p>
      <h3>Genres</h3>
      {film.genres.map((genre) => {
        return <p key={genre.id}>{genre.name}</p>;
      })}
      <Link to="actors">Actors</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
