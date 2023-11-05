import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles.css';


export default function Home() {

  const [students, setStudents]=useState([])

  useEffect(()=>{
    loadStudent();

  }, []);

  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8080/students/allstudents");
    const sortedData = result.data.sort((a, b) => {
      const totalMarksA = calculateTotalMarks(a);
      const totalMarksB = calculateTotalMarks(b);
      return totalMarksB - totalMarksA;
    });
    //setStudents(result.data);
    setStudents(sortedData);
    
  }

  const deleteUser= async (id) =>{
      await axios.delete(`http://localhost:8080/students/${id}`)
      loadStudent()
  }

  const calculateTotalMarks = (student) => {
    if (!student) {
      return null;
    }

    const { marks1, marks2, marks3, marks4, marks5, marks6 } = student;
    const total = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
    return total;
  };

  const calculatePercentage = (student) => {
    const totalMarks = calculateTotalMarks(student);
    if (totalMarks === null) {
      return null;
    }

    // Assuming there are 6 subjects, so the maximum possible marks is 300.
    const maxPossibleMarks = 600;
    const percentage = (totalMarks / maxPossibleMarks) * 100;
    return percentage.toFixed(2); // Rounded to two decimal places.
  };

  return (
    <div className='container table-container'>
        <div className='py-4 table-outer'>
        <table className="table border shadow">
  <thead>
    <tr className='table-head-color'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Roll</th>
      <th scope="col">Marks1</th>
      <th scope="col">Marks2</th>
      <th scope="col">Marks3</th>
      <th scope="col">Marks4</th>
      <th scope="col">Marks5</th>
      <th scope="col">Marks6</th>
      <th scope="col">Total</th>
      <th scope="col">Percentage</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
    students.map((student, index) => (
      <tr key={student.id}>
          <th scope="row">
              {index + 1}
          </th>
      {/* <td>{students.userName}</td>
      <td>{students.email}</td> */}
      <td>{student.name}</td>
      <td>{student.roll}</td>
      <td>{student.marks1}</td>
      <td>{student.marks2}</td>
      <td>{student.marks3}</td>
      <td>{student.marks4}</td>
      <td>{student.marks5}</td>
      <td>{student.marks6}</td>
      <td>{calculateTotalMarks(student)}</td>
      <td>{calculatePercentage(student)}</td>
      <td>
          {/* {/* <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link> */}
          <Link className="btn btn-outline-primary mx-2" to={`/editstudent/${student.id}`}>Edit</Link>
          <button className="btn btn-danger mx-2" onClick={() => deleteUser(student.id)}>Delete</button>
      </td>
    </tr>
      )) }
      </tbody>
    </table>
  </div>
</div>
  )
}
