import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

interface Movie {
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
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home"/>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
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
  )
}

export default Home;

// 이 아래의 코드는 무조건 서버에서 돌아간다.
// 따라서 api요청시 key 노출이 싫을때 아래와 같은 방법으로 사용 가능하다.
// export const getServerSideProps: GetServerSideProps<{ results: Movie[] }> = async () => {
//   const res = await fetch(`http://localhost:3000/api/movies`);
//   const { results } = await res.json();
//   if (!results) {
//     return {
//       props: {
//         results: null,
//       },
//     };
//   }
//   return {
//     props: {
//       results,
//     },
//   };
// };
