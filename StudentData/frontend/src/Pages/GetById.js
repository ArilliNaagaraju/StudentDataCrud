import React, { cache, useEffect, useState } from 'react';

const GetById=()=>{
    const[GetByIdStudent,setGetByIdStudent] = useState("");


    // useEffect(()=>{
    //     studentId();
    // })
    // const studentId =()=>{
    //     try{
    //         const data= servicedata();
    //         setGetByIdStudent(data);
    //     }catch(error){
    //         console.log("This is SyudentId error",error);
    //     }
    // }

    return(
        <>

        <input type="number"
        placeholder='Enter the yourId'
        />
        <button>Submit</button>
        {GetByIdStudent}
        </>
    )

}

export default GetById;