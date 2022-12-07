import React, { useEffect, useState } from 'react';
function Users() {
    // this is the live url of the api
    const url = 'https://energetic-cyan-fedora.cyclic.app/users';
    let [users, setUsers] = useState('');
    useEffect(() => {
        // api call
        fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => setUsers(data));
    }, []);
    console.log(users);
    return (
        <>
            <h1>This is Users component</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">UserId</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Company</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // check if data is called or not using ternary operator
                      users?   users.map((user, i) =>
                      <tr key={i}>
                          <th scope="row">{user.id}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.website}</td>
                          <td>{user.company.name}</td>
                          <td>{user.address.street}</td>
                      </tr>):   
                            <tr>
                                <th scope="row">----------</th>
                                <td>----------</td>
                                <td>----------</td>
                                <td>----------</td>
                                <td>----------</td>
                                <td>----------</td>
                                <td>----------</td>
                            </tr>
                    }

                </tbody>
            </table>
        </>
    )
}
export default Users;