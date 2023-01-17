const express = require("express");
const router = express.Router();
const { studentLogin, getStudent } = require("../../controller/Student_api");

router.post("/student-login", studentLogin);
router.post("/get-student", getStudent);

module.exports = router;
