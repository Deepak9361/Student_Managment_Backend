const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      class: studentClass,
      age,
      phone,
      city
    } = req.body;

    if (!name || !email || !studentClass || !age || !phone || !city) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    if (age < 1 || age > 100) {
      return res.status(400).json({
        message: "Invalid age"
      });
    }

    const student = await Student.create(req.body);

    res.status(201).json(student);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json(updatedStudent);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Student deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};