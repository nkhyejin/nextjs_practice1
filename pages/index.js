import Seo from "../components/Seo";
import { useState, useEffect } from "react";
const API_KEY = "eaaf6e2593199686bcd4c28bcf688306";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    console.log("useEffect");
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
