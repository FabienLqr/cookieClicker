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
    return rows;
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

  async update(player) {
    const { cookie, id } = player;
    await this.database.query(
      `UPDATE ${this.table} SET cookie = ? WHERE id= ?`,
      [cookie, id]
    );
    return player;
  }

  async multiple(player) {
    const { multiplicateur, id } = player;
    await this.database.query(
      `UPDATE ${this.table} SET multiplicateur = ? WHERE id= ?`,
      [multiplicateur, id]
    );
    return player;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Exécuter la requête SQL DELETE pour supprimer une personne dans la table "person"
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return row;
  }
}

module.exports = PlayerRepository;
