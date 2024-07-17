const AbstractRepository = require("./AbstractRepository");

class achatRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "achat" as configuration
    super({ table: "achat" });
  }

  // The C of CRUD - Create operation

  async create(achat) {
    // Execute the SQL INSERT query to add a new achat to the "achat" table
    const [result] = await this.database.query(
      `insert into ${this.table} (id_player, id_upgrade) values (?, ?)`,
      [achat.id_player, achat.id_upgrade]
    );

    // Return the ID of the newly inserted achat
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific achat by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the achat
    return rows[0];
  }

  async readPlayer(id){
    const [rows] = await this.database.query(
        `select * from ${this.table} where id_player = ?`,
        [id]
    );
    return rows;
  }

  async readUpgrade(id){
    const [rows] = await this.database.query(
        `select * from ${this.table} where id_player = ?`,
        [id]
    );
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all achats from the "achat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of achats
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing achat

  // async update(achat) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an achat by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = achatRepository;
