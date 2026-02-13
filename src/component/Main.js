import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieDetail from '../sub/MovieDetail';
import '../css/movie.css';

function Main(props) {
  //상태관리
  const [isLoading, setIsLoading] = useState(true); //로딩바
  const [movies, setMovies] = useState([]); //영화 json데이터
  //영화 데이터 로딩 방법 1
  // const getMovies = async () => {
  //   const json = await (
  //     await fetch(
  //       "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
  //     )
  //   ).json();
  //   setMovies(json.data.movies); //상대변수에 데이터 배열값 넣기
  //   setIsLoading(false); //데이터 로딩시 상태 false
  // };
  // //라이프 사이클에서 데이터를 한번만 로딩한다.
  // useEffect(() => {
  //   getMovies();
  // }, []);
  // //console창에 출력 확인
  // console.log(movies);
  //방법2
  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://yts.lt/api/v2/list_movies.json?genre=animation&sort_by=rating&order_by=desc"
      );


      const movies = response.data.data.movies;

      //console.log(movies); // 배열 정상 출력
      setMovies(movies);
      setIsLoading(false);

    } catch (error) {
      console.log('영화데이터 로딩 오류 : ', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const fantasyAnimationMovies = movies.filter(movie =>
    movie.genres?.includes('Fantasy')
  );

  return (
    <main>
      <section className='movie-main'>
        {isLoading ? (
          <div className="loading-wrap">
            <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt="" className='loading-img' /></div>
        ) : (
          <ul className='movie-list'>
            {fantasyAnimationMovies.map(movie => (
              <MovieDetail
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.large_cover_image}
                genres={movie.genres?.join(', ')}
                rating={movie.rating}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Main;