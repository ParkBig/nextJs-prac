import { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

interface MovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

const Home = () => {
  const router = useRouter();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const onClick = (id: number) => {
    router.push(`/movies/${id}`);
  };

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies ? <h4>Loading...</h4> :
        movies.map((movie) => (
          <div className="movie" key={movie.id} onClick={() => onClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>
              <Link href={`/movies/${movie.id}`} legacyBehavior>
                <a>
                  {movie.original_title}
                </a>
              </Link>
            </h4>
          </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;