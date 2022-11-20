const { pool } = require("../../config/database");

exports.exampleDao = async function (connection, params) {
  const Query = `SELECT * FROM Students;`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};
