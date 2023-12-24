import React, { useState } from "react";
import ManagerServices from "../../services/ManagerServices";

function CreateStaffAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const staffInfo = {
            username: username,
            password: password,
            firstname: firstName,
            lastname: lastName,
        };
        console.log(staffInfo)
        try {
            await ManagerServices.createStaffAccount(staffInfo);
            setSuccess(true);
            setError("");
        } catch (err) {
            console.log(err)
            setError("Failed to create staff account");
            setSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            {success && <p>Create successfully</p>}
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateStaffAccount;