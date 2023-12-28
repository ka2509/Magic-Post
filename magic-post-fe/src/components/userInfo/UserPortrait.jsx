import React, { useEffect, useState } from 'react';
import { LogOutOutline, PersonOutline } from 'react-ionicons';
import UserServices from '../../services/UserServices';

function UserPortrait() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            const response = await UserServices.getCurrentUser();
            setUser(response.data);
        }
        getUser();
    }, []);
    const LogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/';
    }

    return (
        <div className='userportrait'>

            <div className='user'>
                <PersonOutline
                    color={'#00000'}
                    height="25px"
                    width="25px"
                />
                <span>
                    {user.username}
                </span>
            </div >
            <a href='$'>
                <LogOutOutline
                    color={'#00000'}
                    height="25px"
                    width="25px"
                    onClick={() => LogOut()}
                /></a>
        </div >
    );
}

export default UserPortrait;
