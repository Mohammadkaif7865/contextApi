import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Students() {
    const { deleteStudent, feesPaid } = useContext(AppContext);
    return (
        <>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SchoolCode</th>
                            <th scope="col">Name</th>
                            <th scope="col">Class</th>
                            <th scope="col">Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Students;