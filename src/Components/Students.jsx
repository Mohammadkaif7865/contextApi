import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/app-context';
function Students() {
    const { deleteStudent, feesPaid, students } = useContext(AppContext);
    return (
        <>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">SchoolCode</th>
                            <th scope="col">Name</th>
                            <th scope="col">D.O.B</th>
                            <th scope="col">Class</th>
                            <th scope="col">Section</th>
                            <th scope="col">FeeStatus</th>
                            <th scope="col">Toggle Feestatus</th>
                            <th scope="col">Delete Student Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((item, i) => <tr key={i} className={item.feesPaid ? "table-success" : "table-danger"}>
                                <td>{item.schoolCode}</td>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.standard}</td>
                                <td>{item.section}</td>
                                <td>{item.feesPaid ? "Paid" : "Not Paid"}</td>
                                <td><button className='btn btn-primary' onClick={() => feesPaid(item.schoolCode, item.feesPaid)}>Change Fee Status</button></td>
                                <td><button className='btn btn-danger' onClick={() => deleteStudent(item.schoolCode)}>Delete Info</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <Link to="/studentRegistration" className='btn btn-primary'>
                    Add a new Student
                </Link>
            </div>
        </>
    )
}
export default Students;