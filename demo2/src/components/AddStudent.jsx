import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";

export default function AddStudent() {
    let [name, setNameValue] = useState("");
    let [age, setAgeValue] = useState(0);
    let [id, setId] = useState(0);
    let [Students, setStudent] = useState([]);
    let [flagAge, setAgeFlag] = useState(false);
    let [flagName, setNameFlag] = useState(false);

    const add = () =>{
   
    if(name.length<4 || name=="" ) {setNameFlag(true); return false;} else{setNameFlag(false)}
    if(age<19 || age==0){setAgeFlag(true); return false;} else{setAgeFlag(false)}

    setNameFlag(false)
    setAgeFlag(false)

    setId(id+1);
    var Student =  {id: id, name: name, age:age }
    Students.push(Student);
    setStudent(Students);
    }

    const getName = (e) =>{
      setNameValue(e.target.value);
    }

    const getAge = (e) =>{
      setAgeValue(e.target.value);
    }

  console.log(flagAge);

  return (
    <div>
      <div className='container p-5 bg-light'>
      <input type="text" placeholder="Enter Student Name" className="form-control" onChange={getName}/>
      {flagName?  <p className='text-danger'>Student name is required, must be more than 3 characters</p>: ""}
      <input type="number" placeholder="Enter S.Age" className="form-control" onChange={getAge}/>
      {flagAge?  <p className='text-danger'>Student age is required and more than 18 years</p>: ""}
      </div>

      <button className="btn btn-dark m-5" onClick={add}>Add Student</button >
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      {
        Students.map((Student, index)=>{
         return  <tr key={index+1}>
          <td key={index+2}>{Student.id}</td>
          <td key={index+3}>{Student.name}</td>
          <td key={index+4}>{Student.age}</td>
        </tr>
        }) 
      }
      </tbody>
    </Table>
    </div>
  )
}
