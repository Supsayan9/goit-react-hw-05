import { useEffect, useState } from "react";
import { fetchFilmActors } from "../../service/api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActors = async () => {
      try {
        const data = await fetchFilmActors(movieID);
        setActors(data.cast);
      } catch (error) {
        alert({ error });
      }
    };
    getActors();
  }, [movieID]);

  return (
    <div>
      <h2>Actors</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt=""
            />
            <strong>{actor.name}</strong> as <em>{actor.character}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
