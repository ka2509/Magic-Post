import React from 'react';
import { PersonOutline, LogOutOutline } from 'react-ionicons'

function UserPortrait() {
    return (
        <div className='userportrait'>
            <div className='user'>
                <PersonOutline
                    color={'#00000'}
                    height="25px"
                    width="25px"
                />
                <span>
                    user name here
                </span>
            </div>
            <a href='$'>
                <LogOutOutline
                    color={'#00000'}
                    height="25px"
                    width="25px"
                /></a>
        </div>
    );
}

export default UserPortrait;
