const { pool } = require("../../config/database");
const { logger } = require("../../config/winston");
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret");

const indexDao = require("../dao/indexDao");

//학생 삭제
exports.deleteStudent = async function (req, res) {
  const { studentIdx } = req.params;

  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const isValidStudentIdx = await indexDao.isValidStudentIdx(connection, studentIdx);
      if (!isValidStudentIdx) {
        return res.send({
          isSuccess: false,
          code: 410, // 요청 실패시 400번대 코드
          message: "유효한 학생 인덱스가 아닙니다.",
        });
      }

      const [rows] = await indexDao.deleteStudent(connection,studentIdx);

      return res.send({
        isSuccess: true,
        code: 200, // 요청 실패시 400번대 코드
        message: "학생 삭제 성공",
      });
    } catch (err) {
      logger.error(`deleteStudent Query error\n: ${JSON.stringify(err)}`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    logger.error(`deleteStudent DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  }
};



// 학생 업데이트
exports.updateStudents = async function (req, res) {
  const { studentName, marjor, birth, address } = req.body;
  const { studentIdx } = req.params;

  if (studentName && typeof studentName !== "string") {
    return res.send({
      isSuccess : false,
      code: 400, // 요청 실패 시 400번대 코드
      message: "값을 정확히 입력해주세요.",
    });
  }
  if (marjor && typeof marjor !== "string") {
    return res.send({
      isSuccess : false,
      code: 400, // 요청 실패 시 400번대 코드
      message: "값을 정확히 입력해주세요.",
    });
  }
  if (address && typeof address !== "string") {
    return res.send({
      isSuccess : false,
      code: 400, // 요청 실패 시 400번대 코드
      message: "값을 정확히 입력해주세요.",
    });
  }
  // birth : YYYY-MM-DD 형식 검사
  var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (birth && !regex.test(birth)) {
    return res.send({
      isSuccess : false,
      code: 400, // 요청 실패 시 400번대 코드
      message: "날짜 형식을 확인해주세요.",
    });
  }


  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const isValidStudentIdx = await indexDao.isValidStudentIdx(connection, studentIdx);
      if (!isValidStudentIdx) {
        return res.send({
          isSuccess: false,
          code: 410, // 요청 실패시 400번대 코드
          message: "유효한 학생 인덱스가 아닙니다.",
        });
      }



      const [rows] = await indexDao.updateStudents(connection,studentIdx, studentName, marjor, birth, address);
      
      // console.log(2);
      
      return res.send({
        isSuccess: true,
        code: 200, // 요청 실패시 400번대 코드
        message: "학생 수정 성공",
      });
    } catch (err) {
      logger.error(`updateStudents Query error\n: ${JSON.stringify(err)}`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    logger.error(`updateStudents DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  }
}

//학생 생성
exports.createStudent = async function (req, res) {
  const { studentName, marjor, birth, address } = req.body;

  // studentName, marjor, address : 문자열
  if (
    typeof studentName !== "string" ||
    typeof marjor !== "string" ||
    typeof address !== "string"
  ) {
    return res.send({
      isSuccess : false,
      code: 400, // 요청 실패 시 400번대 코드
      message: "값을 정확히 입력해주세요.",
    });
  }
  // birth : YYYY-MM-DD 형식 검사
  var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (!regex.test(birth)) {
    return res.send({
      isSuccess : false,
      code: 400, // 요청 실패 시 400번대 코드
      message: "날짜 형식을 확인해주세요.",
    });
  }

  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const [rows] = await indexDao.insertStudents(connection, studentName, marjor, birth, address);

      return res.send({
        result: rows,
        isSuccess: true,
        code: 200, // 요청 실패시 400번대 코드
        message: "요청 성공",
      });
    } catch (err) {
      logger.error(`readStudents Query error\n: ${JSON.stringify(err)}`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    logger.error(`readStudents DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  }
};



// 학생 테이블 조회
exports.readStudents = async function (rep, res) {
  //이름 조회
  const { studentIdx } = rep.params;
  

  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const [rows] = await indexDao.selectStudents(connection, studentIdx);

      return res.send({
        result: rows,
        isSuccess: true,
        code: 200, // 요청 실패시 400번대 코드
        message: "요청 성공",
      });
    } catch (err) {
      logger.error(`readStudents Query error\n: ${JSON.stringify(err)}`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    logger.error(`readStudents DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  }
};

// 예시 코드
exports.example = async function (req, res) {
  // return res.send("dummy get 요청 성공");
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const [rows] = await indexDao.exampleDao(connection);

      return res.send({
        result: rows,
        isSuccess: true,
        code: 200, // 요청 실패시 400번대 코드
        message: "요청 성공",
      });
    } catch (err) {
      logger.error(`example Query error\n: ${JSON.stringify(err)}`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    logger.error(`example DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  }
};
