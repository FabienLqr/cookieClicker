// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all players from the database
    const players = await tables.player.readAll();

    // Respond with the players in JSON format
    res.json(players);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific player from the database based on the provided ID
    const player = await tables.player.read(req.params.id);

    // If the player is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the player in JSON format
    if (player == null) {
      res.sendStatus(404);
    } else {
      res.json(player);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the player data from the request body
  const player = req.body;

  try {
    // Insert the player into the database
    const insertId = await tables.player.create(player);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted player
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};