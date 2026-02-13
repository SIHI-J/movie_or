import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Detail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const json = await (
          await fetch(
            `https://yts.lt/api/v2/movie_details.json?movie_id=${id}`
          )
        ).json();

        setMovie(json.data.movie);
      } catch (error) {
        console.error('영화 상세 데이터 로딩 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (isLoading)
    return (
      <div className="loading-wrap">
        <img
          src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`}
          alt=""
          className="loading-img"
        />
      </div>
    );

  if (!movie) return <p>영화를 찾을 수 없어요.</p>;

  return (
    <main>
      <section className='movie-detail'>
        <img src={movie.large_cover_image} alt={movie.title} className='detail-img' />
        <div className="detail-text">
          <h3>{movie.title}</h3>
          <p className='year'>{movie.year}년</p>
          <p className='rating'>⭐{movie.rating}</p>
          <p className='summary'>{movie.description_full}</p>
          <p className='genres'>{movie.genres?.join(', ')}</p>

        </div>
        <button className="back-btn" onClick={() => navigate(-1)}>
          목록 화면으로
        </button>
      </section>
    </main>
  );
}

export default Detail;