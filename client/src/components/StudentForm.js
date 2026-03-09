import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axiso from 'axios';

const StudentForm = () => {

    const [fisrtname, setName] = useState();
    const [lastname, setLastName] = useState();
    const [rollnumber, setRollNum] = useState();
    const [gender, setGender] = useState();

    const navigate = useNavigate();

    const handlesubmit = async (e) => {

        try {
            e.preventDefault();
            const studentdata = {

                fisrtname,
                lastname,
                gender,
                rollnumber: Number(rollnumber)

            }

            const { data } = await axiso.post('http://localhost:4000/api/student/add', studentdata);

            if (data.success) {
                alert(data.message);
                setName('')
                setGender('')
                setLastName('')
                setRollNum('')
                navigate("/display-students")

            } else {
                alert(data.message);
            }
        } catch (error) {

            console.log(error.message);

        }

    }

    const handleReset = () => {
        setName('')
        setGender('')
        setLastName('')
        setRollNum('')

    }

    return (
        <div className="flex justify-center items-center h-screen">

            <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-80">

                <h1 className="text-center text-2xl font-bold mb-5">
                    Student Entry Screen
                </h1>

                <form onSubmit={handlesubmit}>

                    <div className="mb-4">

                        <label className="mb-1">First Name</label>
                        <input
                            type='text'
                            className="border w-full p-2 rounded"
                            name="name"
                            value={fisrtname}
                            required
                            pattern="[A-Za-z]+"
                            title="Only letters (a-z, A-Z) are allowed, no numbers or special characters."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-1">Last Name</label>
                        <input
                            type='text'
                            className="border w-full p-2 rounded"
                            name="lastname"
                            value={lastname}
                            required
                            pattern="[A-Za-z]+"
                            title="Only letters (a-z, A-Z) are allowed, no numbers or special characters."
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-1">Roll Number</label>
                        <input
                            type='text'
                            className="border w-full p-2 rounded"
                            name="roll"
                            value={rollnumber}
                            required
                            onChange={(e) => setRollNum(e.target.value)}
                        />
                    </div>



                    <div className='mb-4 text-center'>
                        <label>Gender:</label>
                        <input
                            className='mx-3'
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male

                        <input
                            className='mx-3'
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </div>


                    <div className='flex gap-5 justify-center'>
                        <button type='submit' className="bg-blue-500 text-white w-28 p-2 rounded hover:bg-blue-600">
                            Submit
                        </button>

                        <button onClick={handleReset} className="bg-green-500 text-white w-28 p-2 rounded hover:bg-green-600">
                            Reset
                        </button>
                    </div>


                </form>

                <div className='text-center mt-5'>

                    <NavLink to={'/display-students'}>
                        <button className="bg-red-500 text-white w-28 p-2 rounded hover:bg-red-600">
                            View
                        </button>
                    </NavLink>
                </div>

            </div>




        </div>
    )
}

export default StudentForm;