import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router';

const EditData = ({ submitData, handleSave }) => {

    const location = useLocation();

    const [editData, setEditData] = useState(location.state);

    const handleEditData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setEditData({...editData, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const update = submitData.map((rec) => {
          if (rec.id === editData.id) {
              return editData; 
          } else {
              return rec;
          }
      });

      console.log("updateData :",update);
      
      handleSave(update);
    }

    return (
        <div className="form-wrapper mt-4">
          <Container>
            <h1 className='text-center form-title mt-4 mb-5 fw-bold'>EDIT DATA</h1>
            <form className='row p-5 form-content' onSubmit={handleSubmit}>
                <input type="text" value={editData.id} hidden/>
              <div className="col-md-6">
                <label htmlFor="fname" className='mb-3 fw-bold form-label'>First-Name : </label>
                <input type="text" className="form-control form-input" name="fname" value={editData.fname} onChange={handleEditData} required/>
              </div>
              <div className="col-md-6">
                <label htmlFor="lname" className='mb-3 fw-bold form-label'>Last-Name : </label>
                <input type="text" className="form-control form-input" name="lname" value={editData.lname} onChange={handleEditData} required/>
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="email" className='mb-3 fw-bold form-label'>Email : </label>
                <input type="email" className="form-control form-input" name="email" value={editData.email} onChange={handleEditData} required/>
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="course" className='mb-3 fw-bold form-label'>Course : </label>
                <input type="text" className="form-control form-input" name="course" value={editData.course} onChange={handleEditData} required/>
              </div>
              <div className="col-md-4 mt-4">
                <label htmlFor="phone" className='mb-3 fw-bold form-label'>Phone : </label>
                <input type="tel" className="form-control form-input" name="phone" value={editData.phone} onChange={handleEditData} required/>
              </div>
              <div className="col-md-4 mt-4">
                <label htmlFor="gid" className='mb-3 fw-bold form-label'>GR ID : </label>
                <input type="number" className="form-control form-input" name="gid" value={editData.gid} onChange={handleEditData} required/>
              </div>
              <div className="col-md-4 mt-4">
                <label htmlFor="dob" className='mb-3 fw-bold form-label'>DOB : </label>
                <input type="date" className="form-control form-input" name="dob" value={editData.dob} onChange={handleEditData} required/>
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="role" className='mb-3 fw-bold form-label'>Role : </label>
                <input type="text" className="form-control form-input" name="role" value={editData.role} onChange={handleEditData} required/>
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="add" className='mb-3 fw-bold form-label'>Address : </label>
                <input type="text" className="form-control form-input" name="add" value={editData.add} onChange={handleEditData} required/>
              </div>
              <div className="col-12 mt-5">
                <button type="submit"  className="btn text-white ps-4 pe-4 pt-2 pb-2 fw-semibold" style={{backgroundColor: '#1A4870'}}>Edit</button>
              </div>
            </form>
          </Container>
        </div>
    )
}

export default EditData
