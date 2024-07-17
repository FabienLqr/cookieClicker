const AbstractRepository = require("./AbstractRepository");

class PlayerRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "player" as configuration
    super({ table: "player" });
  }

  // The C of CRUD - Create operation

  async create(player) {
    // Execute the SQL INSERT query to add a new player to the "player" table
    const [result] = await this.database.query(
      `insert into ${this.table} (pseudo, password, cookie, role_id) values (?, ?, ?, ?)`,
      [player.pseudo, player.hashedPassword, 0, 2]
    );

    // Return the ID of the newly inserted player
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific player by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the player
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all players from the "player" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of players
    return rows[0];
  }

  async readLogin(pseudo) {
    // readOne
    // Execute the SQL SELECT query to retrieve a specific person by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where pseudo = ?`,
      [pseudo]
    );
    // Return the first row of the result, which represents the item
    return rows[0];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing player

  // async update(player) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an player by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = PlayerRepository;
