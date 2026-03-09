
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    fisrtname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
    },
    rollnumber: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
   
}, { timestamps: true });



module.exports = mongoose.model("student", studentSchema);


