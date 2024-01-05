import React, { useState } from 'react'
import EmployeeHeader from './EmployeeHeader'

const Delete = () => {

  const [input, changeInput] = useState({
email: ""
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }

  
  return (
    <div>
        <EmployeeHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control"  name='email' value={input.email} onChange={readValue}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={submitValue}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Delete