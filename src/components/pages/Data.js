import React from 'react'

function Data() {
  return (
    <>
     <div className="row">
        <div className="col-6">
            <h5 style={{color: "#5663e1"}}>+ ADD record</h5>
            <hr className="new5"></hr>
        </div>
        <div className="col-6">
            <div class="form-outline">
                <input type="search" className="form-control" id="search" placeholder='Search'></input>
            </div>
        </div>
        <div className='container m-4'>
            <div className="row">
                <ul class="menu-items">
                    <li>#</li>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email</li>
                    <li>State</li>
                    <li>City</li>
                    <li>Pincode</li>
                    <li>Action</li>
                </ul>
                <ul class="data">
                    <li>1</li>
                    <li>Mayur</li>
                    <li>Patel</li>
                    <li>abc@gmail.com</li>
                    <li>Maharashtra</li>
                    <li>Mumbai</li>
                    <li>401305</li>
                    <div className='btn btn-primary'>Edit</div>
                    <div className='btn btn-danger'>Delete</div>
                </ul>
            </div>
        </div>
    </div>
    

    </>
  )
}

export default Data