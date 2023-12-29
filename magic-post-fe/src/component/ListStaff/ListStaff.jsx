import React, { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";

/**
 * Renders a list of staff members.
 *
 * @returns {JSX.Element} The ListStaff component.
 */
function ListStaff() {
    const [staffs, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const data = await UserServices.getAllStaff();
                setStaff(data.data);
                // console.log(staff);
            } catch (err) {
                console.error("Error fetching staff:" + err);
            }
        };
        fetchStaff();
    }, []);

    function formatDate(dateString) {
        if (dateString != null) {
            const options = { day: "2-digit", month: "2-digit", year: "numeric" };
            return new Date(dateString).toLocaleDateString(undefined, options);
        } else {
            return "";
        }
    }

    const deleteUser = async (idUser) => {
        try {
            await UserServices.deleteUser(idUser);
            window.location.reload();
        } catch (err) {
            console.error("Error deleting staff:" + err);
        }
    };

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
                        <th>Work At</th>
                        <th>Action</th>
                    </tr>
                    {staffs.map((staff) => (
                        <tr>
                            <td>{staff.fullname}</td>
                            <td>{staff.email}</td>
                            <td>{formatDate(staff.dob)}</td>
                            <td>{staff.role}</td>
                            <td>{staff.workSpace}</td>
                            <td>
                                <button
                                    className="action-butt"
                                    onClick={() => deleteUser(staff.idUser)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default ListStaff;
