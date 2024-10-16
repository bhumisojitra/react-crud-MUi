import { Container } from 'react-bootstrap'

const FormDetail = ({ handleSubmit, handleForm, input }) => {
  
  return (
    <div className="form-wrapper mt-4">
      <Container>
        <h1 className='text-center form-title mt-4 fw-bold'>STUDENT DETALIS</h1>
        <form className='row p-5 form-content' onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="fname" className='mb-3 fw-bold form-label'>First-Name : </label>
            <input type="text" className="form-control form-input" name="fname" value={input.fname} onChange={handleForm} required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="lname" className='mb-3 fw-bold form-label'>Last-Name : </label>
            <input type="text" className="form-control form-input" name="lname" value={input.lname} onChange={handleForm} required/>
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="email" className='mb-3 fw-bold form-label'>Email : </label>
            <input type="email" className="form-control form-input" name="email" value={input.email} onChange={handleForm} required/>
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="course" className='mb-3 fw-bold form-label'>Course : </label>
            <input type="text" className="form-control form-input" name="course" value={input.course} onChange={handleForm} required/>
          </div>
          <div className="col-md-4 mt-4">
            <label htmlFor="phone" className='mb-3 fw-bold form-label'>Phone : </label>
            <input type="tel" className="form-control form-input" name="phone" value={input.phone} onChange={handleForm} required/>
          </div>
          <div className="col-md-4 mt-4">
            <label htmlFor="gid" className='mb-3 fw-bold form-label'>GR ID : </label>
            <input type="number" className="form-control form-input" name="gid" value={input.gid} onChange={handleForm} required/>
          </div>
          <div className="col-md-4 mt-4">
            <label htmlFor="dob" className='mb-3 fw-bold form-label'>DOB : </label>
            <input type="date" className="form-control form-input" name="dob" value={input.dob} onChange={handleForm} required/>
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="role" className='mb-3 fw-bold form-label'>Role : </label>
            <input type="text" className="form-control form-input" name="role" value={input.role} onChange={handleForm} required/>
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="add" className='mb-3 fw-bold form-label'>Address : </label>
            <input type="text" className="form-control form-input" name="add" value={input.add} onChange={handleForm} required/>
          </div>
          <div className="col-12 mt-5">
            <button type="submit" className="btn text-white ps-4 pe-4 pt-2 pb-2 fw-semibold form-button" style={{backgroundColor: '#1A4870'}}>SUBMIT</button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default FormDetail
