import axios from "axios";
import React, { useEffect, useState } from "react";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  //   const movieTitle = props.movieInfo.title;
  //   const moviePost = props.movieInfo.backdrop_path;
  //   const movieRuntime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };
    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      //   console.log(response.data);
      if (response.data.success) {
        setFavoriteNumber(response.data.FavoriteNumber);
      } else {
        alert("숫자 정보를 가져오는데 실패했습니다.");
      }
    });
    axios.post("/api/favorite/favorited", variables).then((response) => {
      //   console.log(response.data);
      if (response.data.success) {
        setFavorited(response.data.Favorited);
      } else {
        alert("정보를 가져오는데 실패했습니다.");
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button>
        {Favorited ? "Delete Favorite" : "Add to Favorite"} {FavoriteNumber ? FavoriteNumber : "0"}
      </button>
    </div>
  );
}

export default Favorite;
