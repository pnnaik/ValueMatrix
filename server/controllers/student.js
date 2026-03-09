const express = require("express");

const Student = require("../models/student.js");

// Add New Student
const addStudent = async (req, res) => {
    try {
        const { fisrtname, lastname, rollnumber, gender } = req.body;

        if (!fisrtname || !lastname || !rollnumber || !gender) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existrollnum = await Student.findOne({ rollnumber });
        if (existrollnum) {
            return res.json({ success: false, message: "Roll Number Already Exists" });

        }
        const student = new Student({
            fisrtname,
            lastname,
            rollnumber,
            gender,
        });

        await student.save();

        res.status(201).json({ success: true, message: "Student added successfully", student });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ success: true, students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }

};

module.exports = { addStudent, getStudents, deleteStudent };
