import React, { useState, useContext } from 'react';
import StudentContext from '../Context/app-context';
// # You can only create only one context in a application
function Student() {
    const [name, setName] = useState("");
    const [standard, setStandard] = useState("");
    const [section, setSection] = useState("");
    const [dob, setDob] = useState("");
    const { addStudent } = useContext(StudentContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        let a = {
            name,
            standard,
            section,
            dob,
        }
        console.log(a);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="namehelp" value={name} onChange={(e) => setName(e.target.value)} />
                    <div id="namehelp" className="form-text">Please fill your proper info</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="standard" className="form-label">Standard</label>
                    <input type="number" className="form-control" id="standard" value={standard} onChange={(e) => setStandard(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Section" className="form-label">Section</label>
                    <input type="text" className="form-control" id="Section" value={section} onChange={(e) => setSection(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DOB" className="form-label">DOB</label>
                    <input type="date" className="form-control" id="DOB" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}
export default Student;