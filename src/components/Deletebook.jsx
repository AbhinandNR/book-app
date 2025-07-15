import React from 'react'
import Booknav from './Booknav'

const Deletebook = () => {
  return (
    <div>


<Booknav/>

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                            <label htmlFor="Book title" className="form-label">Book Title</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deletebook