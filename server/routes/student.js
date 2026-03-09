const express = require("express");
const router = express.Router();

const { addStudent, getStudents, deleteStudent } = require("../controllers/student.js");



router.post("/student/add", addStudent);
router.get("/student/get", getStudents);
router.delete('/student/:id', deleteStudent);

module.exports = router;
