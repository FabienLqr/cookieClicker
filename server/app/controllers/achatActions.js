// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all achats from the database
    const achats = await tables.achat.readAll();

    // Respond with the achats in JSON format
    res.json(achats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific achat from the database based on the provided ID
    const achat = await tables.achat.read(req.params.id);

    // If the achat is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the achat in JSON format
    if (achat == null) {
      res.sendStatus(404);
    } else {
      res.json(achat);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readPlayer = async (req, res, next) => {
    try {
        const achat = await tables.achat.readPlayer(req.params.id);
        if(achat == null) {
            res.sendStatus(404);
        }else{
            res.json(achat)
        }
    } catch (error) {
        next(error);
    }
}

const readUpgrade = async (req, res, next) => {
    try {
        const achat = await tables.achat.readUpgrade(req.params.id);
        if(achat == null) {
            res.sendStatus(404);
        }else{
            res.json(achat)
        }
    } catch (error) {
        next(error);
    }
}
// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the achat data from the request body
  const achat = req.body;

  try {
    // Insert the achat into the database
    const insertId = await tables.achat.create(achat);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted achat
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
  readPlayer,
  readUpgrade,
  // edit,
  add,
  // destroy,
};
