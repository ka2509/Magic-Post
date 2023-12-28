import React, { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";

function ListStaff() {
    const [staffs, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const data = await UserServices.getAllStaff();
                setStaff(data.data);
                // console.log(staff);
            } catch (err) {
                console.error("Error fetching staff:" + err)
            }
        }
        fetchStaff();
    }, [])
    return (
        <div className="listStaff">
            <h1>List Of Staff</h1>
            <div>
                <table>

                    <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Date Of Birth</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    {staffs.map((staff) => (
                        <tr>
                            <td>{staff.fullname}</td>
                            <td>{staff.email}</td>
                            <td>{staff.dob}</td>
                            <td>{staff.role}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default ListStaff