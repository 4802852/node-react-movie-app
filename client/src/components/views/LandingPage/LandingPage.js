import React, { useEffect, useState } from "react";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import { API_KEY } from "../../dev";
import MainImage from "../commons/MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setMovies([...Movies, ...response.results]);
        setCurrentPage(response.page);
        if (response.page === 1) setMainMovieImage(response.results[0]);
      });
  };

  useEffect(() => {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
    // eslint-disable-next-line
  }, []);

  const loadMoreItems = () => {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
    fetchMovies(endpoint);
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Main Image*/}
      {MainMovieImage && <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`} title={MainMovieImage.original_title} text={MainMovieImage.overview} />}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />
        {/* Movie Grid Card */}
        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards LandingPage image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null} movieId={movie.id} movieName={movie.original_title} />
              </React.Fragment>
            ))}
        </Row>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMoreItems}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
