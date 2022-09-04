import axios from "axios";
import React, { useEffect, useState } from "react";
import "./favorite.css";

function FavoritePage() {
  const [Favorites, setFavorites] = useState([]);

  const variable = {
    userFrom: localStorage.getItem("userId"),
  };

  useEffect(() => {
    axios.post("/api/favorite/getfavoredmovies", variable).then((response) => {
      //   console.log(response);
      if (response.data.success) {
        setFavorites(response.data.favorites);
      } else {
        alert("영화 정보를 가져오는데 실패했습니다.");
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2>Favorite Movies</h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie Runtime</th>
            <td>Remove from Favorites</td>
          </tr>
        </thead>
        <tbody>
          {Favorites.map((favorite, index) => (
            <tr key={index}>
              <td>{favorite.movieTitle}</td>
              <td>{favorite.movieRuntime}</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
