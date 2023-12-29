import React, { useState } from "react";
import ManagerServices from "../../services/ManagerServices";

function CreateStaffAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const staffInfo = {
            username: username,
            password: password,
            firstname: firstName,
            lastname: lastName,
            email: email,
            birthday: birthday,
        };
        console.log(staffInfo)
        try {
            await ManagerServices.createStaffAccount(staffInfo);
            setSuccess(true);
            setError("");
            window.location.href = "/leader";
        } catch (err) {
            console.log(err)
            setError("Failed to create staff account");
            setSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="createStaffForm">

            <h1>Create Staff Account</h1>
            <div className="formInput">

                <label>
                    Username:
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>
                    Password:
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>
                    First Name:
                </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label>
                    Last Name:
                </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label>
                    Email:
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label for="birthday">
                    Birthday:
                </label>
                <input 
                    type="date"
                    value={birthday} 
                    name="birthday"
                    id="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <p></p>
                <button type="submit">Submit</button>
            </div>
            {error && <p>{error}</p>}
        </form>
    );
}

export default CreateStaffAccount;