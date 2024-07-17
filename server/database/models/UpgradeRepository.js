/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class upgradeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "upgrade" as configuration
    super({ table: "upgrade" });
  }

  // The C of CRUD - Create operation

  async create(upgrade) {
    // Execute the SQL INSERT query to add a new upgrade to the "upgrade" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, cout, multiplicateur, image_url) values (?, ?, ?, ?, ?)`,
      [upgrade.name, upgrade.description, upgrade.cout, upgrade.multiplicateur, upgrade.image_url]
    );

    // Return the ID of the newly inserted upgrade
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific upgrade by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the upgrade
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all upgrades from the "upgrade" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of upgrades
    return rows;
  }

  // The U of CRUD - Update operation

  async update(upgrade) {
    const { name, description, cout, multiplicateur, image_url, id } = upgrade;
    await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, cout = ?, multiplicateur = ?, image_url = ? WHERE id= ?`,
      [name, description, cout, multiplicateur, image_url, id]
    );
    return upgrade;
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

module.exports = upgradeRepository;
