import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    state: "",
    city: "",
    pincode: ""
  });

  const { firstname, lastname, email, state, city, pincode } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <>
    <div className="position-relative">
      <div className="position-absolute top-0 start-0">
        <div className="mx-auto p-5">

          <form onSubmit={e => onSubmit(e)}>

          <div className="row">
                <div className="col-4">
                  <div className="form-group">
                  <label htmlFor="firstname" className="form-label text-primary fw-bold">First Name</label>
                    <input
                      type="text" className="form-control form-control-lg" name="firstname" value={firstname} onChange={e => onInputChange(e)} required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                  <label htmlFor="lastname" className="form-label text-primary fw-bold">Last Name</label>
                    <input
                      type="text" className="form-control form-control-lg" name="lastname" value={lastname} onChange={e => onInputChange(e)} required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                  <label htmlFor="email" className="form-label text-primary fw-bold">Email</label>
                    <input
                      type="email" className="form-control form-control-lg" name="email" disabled value={email} onChange={e => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="state" className="form-label text-primary fw-bold">State</label>
                    <select className="form-control form-control-lg" name="state" value={state} onChange={e => onInputChange(e)} required>
                      <option value="" defaultValue disabled hidden>Select State</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                  <label htmlFor="city" className="form-label text-primary fw-bold">City</label>
                    <input type="text" className="form-control form-control-lg" name="city" value={city} onChange={e => onInputChange(e)} required />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="pincode" className="form-label text-primary fw-bold">Pincode</label>
                    <input
                      type="text" className="form-control form-control-lg" name="pincode" maxLength="5" pattern="[1-9][0-9]{4}" minLength="5" value={pincode} onChange={e => onInputChange(e)} required
                    />
                  </div>  
                </div>  
              </div>

              <div className="text-center mt-4">
              <button className="btn btn-primary btn-block rounded-pill" style={{marginRight: "3%"}}>Update User</button>
              <button className="btn btn-secondary btn-block rounded-pill">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>  
    </>
  );
};

export default EditUser;
