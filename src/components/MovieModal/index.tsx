import BASE_URL from "../../api/baseUrl";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./MovieModal.css";
import React, { useRef } from 'react';
import { MovieModalProps } from "../../interfaces/index";

function MovieModal({ movie, setModalOpen }: MovieModalProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {setModalOpen(false)});

  return (
    <div className='presentation'>
      <div className='wrapper-modal'>
      <div className='modal' ref={ref}>
          {/** x클릭시 modalOpen false로 변경하여 끄기 **/}
          <span onClick={() => setModalOpen(false)} className='modal-close'>
            X
          </span>
          <img
            className="modal__poster-img"
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>{" "}
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>

            <h2 className="modal__title">{movie.title ? movie.title : movie.name}</h2>
            <p className="modal__overview"> 평점: {movie.vote_average}</p>
            <p className="modal__overview"> {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;