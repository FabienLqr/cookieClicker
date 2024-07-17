/* eslint-disable camelcase */
const argon2 = require("argon2");

const jwt = require("jsonwebtoken");

// Import access to database tables
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific player from the database based on the provided pseudo and password
    const player = await tables.player.readLogin(req.body.pseudo);

    if (player == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(player.password, req.body.password);

    if (verified) {
      const { pseudo, role_id } = player;
      // Respond with the user in JSON format (but without the hashed password)
      delete player.password;
      const jwtToken = jwt.sign({ pseudo, role_id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.cookie("jwtToken", jwtToken, { httpOnly: true, secure: false });
      res.json( player );
    } else {
      res.sendStatus(403).json({ message: "Accès refusé mon reuf" });
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("jwtToken");
    res.json({message: "La deco est un succes"});
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  logout,
};