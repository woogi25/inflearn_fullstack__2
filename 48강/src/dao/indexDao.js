const { pool } = require("../../config/database");

exports.insertStudents = async function (connection, studentName, marjor, birth, address) {
  const Query = `insert into Enrolment.Students(studentName, marjor, birth, address) values(?, ?, ?, ?);`;
  const Params = [studentName, marjor, birth, address];

  const rows = await connection.query(Query, Params);

  return rows;
};


exports.selectStudents = async function (connection, studentIdx) {
  const Query = `SELECT * FROM Enrolment.Students where studentIdx = ?;`;
  const Params = [studentIdx];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.exampleDao = async function (connection) {
  const Query = `SELECT * FROM Students;`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};
