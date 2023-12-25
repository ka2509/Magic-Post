import React, { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";

function ListStaff(){
    const [staffs,setStaff] = useState([]);

    useEffect(()=>{
        const fetchStaff = async () => {
            try {
                const data = await UserServices.getAllStaff();
                setStaff(data.data);
                // console.log(staff);
            } catch (err){
                console.error("Error fetching staff:"+err )
            }
        }
        fetchStaff();
    },[])
    return(
        <div>
            <h1>List Of Staff</h1>
            <div>
                <tr>
                    <td>FullName</td>
                    <td>Email</td>
                    <td>Date Of Birth</td>
                    <td>Role</td>
                    <td>Action</td>
                </tr>
                {staffs.map((staff)=>(
                    <tr>
                        <td>{staff.fullname}</td>
                        <td>{staff.email}</td>
                        <td>{staff.dob}</td>
                        <td>{staff.role}</td>
                        <td><button>Delete</button></td>
                    </tr>   
                ))}
            </div>
        </div>
    )
}

export default ListStaff