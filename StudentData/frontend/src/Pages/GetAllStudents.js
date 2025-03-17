import React, { useState } from 'react';

const GetAllStudents=()=>{
const[AllStudents,setAllStudent]=useState("");

// useEffect(() => {
//     handealAllstudent();
// }, []);

// const handealAllstudent=()=>{
//     try{
//         const data =await getAlldata();
//         setAllStudent(data);
//     }catch(error){
//         console.log("This is AllStudents Error",error);
//     }
// }

return(
    <>
    <table border="2px">
        <th>
            <tr>
                <td>StuentId</td>
                <td>Student Name</td>
                <td>Student Age</td>
                <td>Student Department</td>
            </tr>
        </th>
        <tbody>
            <tr>
            <td>{AllStudents.StudentId}</td>
            <td>{AllStudents.StudentName}</td>
            <td>{AllStudents.StudentAge}</td>
            <td>{AllStudents.StudentDepartment}</td>
            </tr>
        </tbody>
    </table>
    </>
);

}

export default GetAllStudents;