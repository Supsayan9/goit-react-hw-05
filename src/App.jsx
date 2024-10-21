import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MoviesReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieID" element={<MovieDetailsPage />}>
            <Route path="actors" element={<MovieCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
