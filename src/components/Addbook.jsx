import React from 'react'
import Booknav from './Booknav'

const Addbook = () => {
  return (
    <div>

<Booknav/>
<div className="container">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <div className="row g-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                    <label htmlFor="Book Name" className="form-label">Book Name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="Author Name" className="form-label">Author Name</label>
                    <input type="text" className="form-control" />
                </div>


                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    
                    <label htmlFor="descrption" className="from-label">Discription</label>
                    <textarea name="" id="" className="form-control"></textarea>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <label htmlFor="Price" className="form-label">Price</label>
                    <input type="text" className="form-control" />
                </div>


                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="catagorey" className="form-label">catagorey</label>
                    <select name="" id="" className="form-control">
                        <option value="">story</option>
                        <option value="">novel</option>
                        <option value="">short-story</option>
                    </select>
                </div>


                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="Cover Photo" className="form-label">Cover Photo</label>
                    <input type="file" className="form-control" />
                </div>


                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="Publisher" className="form-label">publisher</label>
                    <input type="text" className="form-control" />

                </div>


                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <button className="btn btn-success">Submit</button>
                </div>
            </div>




        </div>
    </div>
</div>













    </div>
  )
}

export default Addbook