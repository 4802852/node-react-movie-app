import React from "react";
import axios from "axios";
import { useNavigate } from "react-redux";

function NavBar() {
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };
  return (
    <div>
      NavBar<button onClick={onLogoutHandler}>로그아웃</button>
    </div>
  );
}

export default NavBar;
