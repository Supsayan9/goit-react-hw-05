import { Link, useLocation} from "react-router-dom"

export default function MovieList({movies}) {

    const location = useLocation()
    return (
        <ul>
            {movies.map((movie) => {
                console.log(location.pathname);
                console.log(location);
                
                
                return <li key={movie.id}><Link to={`/movies/${movie.id.toString()}`} state={{ from: location }}>{movie.title}</Link></li>
            })}
        </ul>
    )
}