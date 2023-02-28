import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function DashBoard() {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8082/Employees/get')
    .then(response => {
      setdata(JSON.parse(JSON.stringify(response.data)))
    }, [])
  })
  //console.log(data)

  const editemployee = (d) => {
  let { id, firstname, lastname, email, phonenumber} = d
  localStorage.setItem("ID", id)
  localStorage.setItem("FirstName", firstname)
  localStorage.setItem("LastName", lastname)
  localStorage.setItem("Email", email)
  localStorage.setItem("PhoneNumber", phonenumber)


}

function deletefun(id) {
  try{
    axios.delete(`http://localhost:8082/Employees/delete/${id}`);
    setdata(data.filter(d => d.id !== id ));
  }
  catch(err){
    console.error(err);
  }
}

  return (
  
    <div>
      <Container>
      <p className='text-center'>employee List</p>
      {/* <Link to="/add-employee"> */}
      {/* <button className="btn btn-primary" onClick={addemployee}> Add employee</button> */}

      {/* </Link> */}
      <br />
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email id</th>
              <th>PhoneNumber</th>
              
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((employee) => (
              <tr key={employee.id} >
                {/* <td>{localStorage.getItem("id")}</td> */}
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.phonenumber}</td>
                {/* <td>{employee.addressline1}</td>
                <td>{employee.addressline2}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td> */}
                <td>
                  <Link to={"/update/" + employee.id} >
                    <td><button onClick={() => editemployee(employee)} className="btn btn-info">Update</button></td>
                  </Link>
                  <td>
                    <button className="btn btn-info" onClick={() => deletefun(employee.id)}>Delete</button>
                  </td>
                </td>
                {/* <td>
                  <button className="btn btn-info">Edit</button>
                  <button className="btn btn-info">Delete</button>
                </td> */}
              </tr>

            ))}


          </tbody>

        </table>
      </div>
      </Container>
    </div>
  )

}














