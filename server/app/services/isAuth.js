/* eslint-disable consistent-return */
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    if (!token) {
      return res.status(401).json({ message: "Non autorisé" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Accès refusé, il faut etre co !" });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  isAuth,
};