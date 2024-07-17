// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all upgrades from the database
    const upgrades = await tables.upgrade.readAll();

    // Respond with the upgrades in JSON format
    res.json(upgrades);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific upgrade from the database based on the provided ID
    const upgrade = await tables.upgrade.read(req.params.id);

    // If the upgrade is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the upgrade in JSON format
    if (upgrade == null) {
      res.sendStatus(404);
    } else {
      res.json(upgrade);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const upgrade = await tables.upgrade.update(req.body);
    if (upgrade == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(upgrade);
    }
  } catch (error) {
    next(error);
  }
};
// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the upgrade data from the request body
  const upgrade = req.body;

  try {
    // Insert the upgrade into the database
    const insertId = await tables.upgrade.create(upgrade);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted upgrade
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const row = await tables.upgrade.delete(req.params.id);
    if (row.affectedRows === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
