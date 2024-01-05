import React, { useState } from "react";
import EmployeeHeader from "./EmployeeHeader";

const AddData = () => {
  const [input, changeInput] = useState({
    id: "",
    imageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age:"",
    dob: "",
    salary: "",
    address: ""
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }

  return (
    <div>
      <EmployeeHeader />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={input.id}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-labe">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  value={input.imageUrl}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={input.firstName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={input.lastName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="form-control"
                  name="contactNumber"
                  value={input.contactNumber}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={input.age}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="form-control"
                  name="dob"
                  value={input.dob}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Salary
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="form-control"
                  name="salary"
                  value={input.salary}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={input.address}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
