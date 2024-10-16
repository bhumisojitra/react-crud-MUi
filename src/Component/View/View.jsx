import { Container } from 'react-bootstrap'
import img from '../../assets/1.avif'
import Dropdown from 'react-bootstrap/Dropdown';

const View = ({ submitData, handleEdit, handleDelete, handleplus, handleRole, searchData, handleSearch, handelSearchBtn }) => {

    const handleEditData = (id) => {
        const singleRec = submitData.find((rec)=>{
            return rec.id === id;
        })
        handleEdit(singleRec); 
    }

    const handleDeleteData = (id) =>{
        handleDelete(id);
    }

  return (
    <>
        <div className='d-flex align-items-center justify-content-lg-around'>
            {/* Dropdown */}
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="transperent" id="dropdown-basic" style={{backgroundColor: '#1A4870', color: 'white'}}>
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.ItemText className="Dropdown-item-text" onClick={() => handleRole('')}>All</Dropdown.ItemText>
                        <Dropdown.ItemText className="Dropdown-item-text" onClick={() => handleRole('admin')}>Admin</Dropdown.ItemText>
                        <Dropdown.ItemText className="Dropdown-item-text" onClick={() => handleRole('user')}>User</Dropdown.ItemText>
                        <Dropdown.ItemText className="Dropdown-item-text" onClick={() => handleRole('others')}>Others</Dropdown.ItemText>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {/* Search */}
            <div>
                <input type="text" placeholder='Enter Search' value={searchData} onChange={handleSearch} />
                <button onClick={handelSearchBtn}>@</button>
            </div>
        </div>
            <div>
                <h1 className='text-center mt-4 mb-5 fw-bold'>VIEW DATA</h1>

                {submitData.length === 0 ? (
                    <div className="no-data-container text-center">
                        <img src={img} alt="No data available" className='w-50 h-50 mb-5'/>
                        <p className='fw-semibold'>No data available to display.</p>
                    </div>
                ) : (

                <table className="table table-striped">
                    <thead>
                        <tr className='fw-bold fs-6' style={{textAlign: 'center', height: '60px', verticalAlign: 'middle'}}>
                        <th scope="col">No.</th>
                        <th scope="col">F-Name<button onClick={handleplus}>A-Z</button></th>
                        <th scope="col">L-Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Course</th>
                        <th scope="col">Phone</th>
                        <th scope="col">GR ID</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Role</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitData.map((data, index) => {
                                return(
                                    <tr key={data.id} style={{textAlign: 'center', height: '80px', verticalAlign: 'middle'}}>
                                        <td>{index+1}</td>
                                        <td>{data.fname}</td>
                                        <td>{data.lname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.course}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.gid}</td>
                                        <td>{data.dob}</td>
                                        <td>{data.role}</td>
                                        <td>{data.add}</td>
                                        <td><button className='btn me-2' style={{backgroundColor: '#1A4870'}} onClick={()=> handleEditData (data.id)}><i className="bi bi-pen-fill" style={{color: 'white'}}></i></button><button className='btn' style={{backgroundColor: '#1A4870'}} onClick={()=> handleDeleteData(data.id)}><i className="bi bi-archive-fill" style={{color: 'white'}}></i></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>   
                )}                                                 
            </div>
    </>
  )
}

export default View