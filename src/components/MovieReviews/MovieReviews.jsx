import { useEffect, useState } from "react";
import { fetchFilmReviews } from "../../service/api";
import { useParams } from "react-router-dom";

export default function MoviesReviews() {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchFilmReviews(movieID);
        setReviews(data.results);
      } catch (error) {
        alert({ error });
      }
    };
    getReviews();
  }, [movieID]);

  if (reviews.length === 0) {
    return <p>There are no reviews</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong>: {review.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
