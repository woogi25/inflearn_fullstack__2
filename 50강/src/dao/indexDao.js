const { pool } = require("../../config/database");

exports.deleteStudent = async function (connection,studentIdx) {
  const Query = `update Enrolment.Students set status = "D" where studentIdx = ?;`;
  const Params = [studentIdx];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.updateStudents = async function (connection,studentIdx, studentName, marjor, birth, address) {
  const Query = `update Enrolment.Students set studentName = ifnull(?,studentName), 
  marjor = ifnull(?,marjor), birth = ifnull(?,birth), address = ifnull(?,address) where studentIdx = ?;`;
  const Params = [studentName, marjor, birth, address, studentIdx];

  const rows = await connection.query(Query, Params);

  return rows;
};


exports.isValidStudentIdx = async function (connection, studentIdx) {
  const Query = `SELECT * FROM Enrolment.Students where studentIdx = ? and status = 'A';`;    
  const Params = [studentIdx];   

  const [rows] = await connection.query(Query, Params);

  if (rows < 1) {
    return false
  }

  return true;
};


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
