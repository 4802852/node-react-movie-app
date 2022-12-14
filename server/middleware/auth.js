const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증 처리
  // 1. 쿠키에서 클라이언트 토큰을 가져온다.
  let token = req.cookies.x_auth;
  // 2. 토큰을 복호화하여 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
