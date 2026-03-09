

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import image from '../image/images.png'
import { NavLink } from 'react-router-dom';

const DisplayStudent = () => {

    const [studentdata, setStudentData] = useState([]);

    const getAllStudent = async () => {

        try {
            const { data } = await axios.get('http://localhost:4000/api/student/get');
            setStudentData(data.students);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/student/${id}`);
            setStudentData(studentdata.filter((s) => s._id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllStudent()

    }, [])
    return (
        <div>

            <h2 className='text-center m-16'>Student Records</h2>

            {studentdata.map((item, index) => (

                <div key={index} className='m-5 flex border-black border-2 p-5'>
                    <div className='flex items-center'>
                        <img src={image} className='w-20 h-20 mx-5 ' />
                    </div>
                    <div>
                        <p> First Name: <span className='text-xl'>{item.fisrtname}</span></p>
                        <p>Last Name: <span className='text-xl'>{item.lastname}</span></p>
                        <p>Roll Number: <span className='text-xl'>{item.rollnumber}</span></p>
                        Created At: {new Date(item.createdAt).toLocaleDateString()}
                        <div className="mt-4">
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <NavLink to={'/'} >

                <div className='text-center'>
                    <button className='bg-blue-500 text-white w-28 p-2 rounded hover:bg-blue-600'>Back</button>
                </div>

            </NavLink>

        </div>
    )
}

export default DisplayStudent