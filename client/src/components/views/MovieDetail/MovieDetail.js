import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import { API_KEY } from "../../dev";
import MainImage from "../commons/MainImage";
import MovieInfo from "./Sections/MovieInfo";

function MovieDetail(props) {
  let { movieId } = useParams();
  const [Movie, setMovie] = useState([]);

  const endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
  //   const endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Header */}
      {Movie && <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} title={Movie.original_title} text={Movie.overview} />}
      {/* Body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* Movie Info */}
        {Movie && <MovieInfo movie={Movie} />}
        <br />
        {/* Actors Grid */}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
          <button>Toggle Actor View</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
