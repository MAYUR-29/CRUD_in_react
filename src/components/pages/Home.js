import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteUser from "../users/DeleteUser";


const Home = () => {

  const [users, setUser] = useState([]);
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [btnValue, setBtnValue] = useState();
  // const [searchTerm, setSearchTerm] = useState("");

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = users.filter(o=>Object.keys(o).some(k => {
   
    if (inputText === '') {
        return o;
      }
   
    else{
        return o[k].toString().toLowerCase().includes(inputText);
        // console.log(o[k].toString().toLowerCase().includes(inputText));
    }
    }))

  return (
    <body>
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-6">
          <Link to={"/users/add"}><h5 style={{color: "#5663e1"}}>+ ADD record</h5></Link>
          </div>
          <div className="col-6 float-right">
            <div className="form-outline">
              <input type="search" id="form1" className="w-50 float-end mb-2 form-control" placeholder="search"   onChange={inputHandler}/>
            </div>
          </div>
        </div>
        <table className="table border shadow">
          <thead className="thead-dark bg-primary">
            <tr>
              <th scope="col" className="text-light">#</th>
              <th scope="col" className="text-light">First Name</th>
              <th scope="col" className="text-light">Last Name</th>
              <th scope="col" className="text-light">Email</th>
              <th scope="col" className="text-light">State</th>
              <th scope="col" className="text-light">City</th>
              <th scope="col" className="text-light">Pincode</th>
              <th className="text-center text-light">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr>
                <th scope="row" key={index + 1}>{index + 1}</th>
                <td key={user.firstname}>{user.firstname}</td>
                <td key={user.lastname}>{user.lastname}</td>
                <td key={user.email}>{user.email}</td>
                <td key={user.state}>{user.state}</td>
                <td key={user.city}>{user.city}</td>
                <td key={user.pincode}>{user.pincode}</td>
                <td key="button" className="text-center">
                  <Link className="btn btn-primary rounded-pill" style={{marginRight: "3%", width:"40%"}} to={`/users/edit/${user.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger openModalBtn rounded-pill" value={user.id} onClick={() => {setModalOpen(true);setBtnValue(user.id)}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            {modalOpen && <DeleteUser setOpenModal={setModalOpen} id={btnValue}/>}
      </div>
    </div>
    </body>
  );
};

export default Home;
