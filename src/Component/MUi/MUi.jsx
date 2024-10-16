import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import img from '../../assets/1.avif';

const MUi = ({ submitData, handleEdit, handleDelete}) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEditData = (id) => {
        const singleRec = submitData.find((rec) => rec.id === id);
        handleEdit(singleRec);
    };

    const handleDeleteData = (id) => {
        handleDelete(id);
    };

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <div>
                    <h1 className='text-center mt-4 mb-5 fw-bold'>MUI DATA</h1>

                    {submitData.length === 0 ? (
                        <div className='no-data-container text-center'>
                            <img src={img} alt='No data available' className='w-50 h-50 mb-5' />
                            <p className='fw-semibold'>No data available to display.</p>
                        </div>
                    ) : (
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label='sticky table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell>F-Name</TableCell>
                                        <TableCell>L-Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Course</TableCell>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>GR ID</TableCell>
                                        <TableCell>DOB</TableCell>
                                        <TableCell>Role</TableCell>
                                        <TableCell>Address</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {submitData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => (
                                            <TableRow hover key={data.id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{data.fname}</TableCell>
                                                <TableCell>{data.lname}</TableCell>
                                                <TableCell>{data.email}</TableCell>
                                                <TableCell>{data.course}</TableCell>
                                                <TableCell>{data.phone}</TableCell>
                                                <TableCell>{data.gid}</TableCell>
                                                <TableCell>{data.dob}</TableCell>
                                                <TableCell>{data.role}</TableCell>
                                                <TableCell>{data.add}</TableCell>
                                                <TableCell>
                                                    <button className='btn me-2' style={{ backgroundColor: '#1A4870' }}  onClick={() => handleEditData(data.id)}>
                                                        <i className='bi bi-pen-fill' style={{ color: 'white' }}></i>
                                                    </button>
                                                    <button className='btn' style={{ backgroundColor: '#1A4870' }} onClick={() => handleDeleteData(data.id)}>
                                                        <i className='bi bi-archive-fill' style={{ color: 'white' }}></i>
                                                    </button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}

                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component='div'
                        count={submitData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </Paper>
        </>
    );
};

export default MUi;
