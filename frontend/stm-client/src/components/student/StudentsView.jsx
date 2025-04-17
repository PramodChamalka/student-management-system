// import React, { useState } from 'react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'


const StudentsView = () => {

    const [students,setStudents]=useState([]);

    useEffect(()=>{
        loadStudents();
    },[]);

    const loadStudents=async()=>{
        const result = await axios.get(
            "http://localhost:5001/api/v1/students",
        {
            validateStatus:()=>{
                return true;
            },
        }
    );
    if(result.status===302){
        setStudents(result.data);
    }
};
  return (

    <section>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department Phone</th>
                    <th>Action</th>
                </tr>
            </thead>


            <tbody>
                {students.map((student,index) => (
                    <tr key={student.id}>
                        <th scope='row' key={index}>
                            {index+1}
                        </th>

                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td>View</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
                    ))}
                
            </tbody>
        </table>
        
    </section>
  )
}

export default StudentsView