import React from 'react';
import styled from 'styled-components';
import Avatar from '../../Images/code.webp';

const ProfileStyle = styled.div`
    .mainprofile{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }    
    .avadiv{
        display: grid;
        border-bottom: ridge;
        margin:1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .avatar{
        height: 300px;
        width: 250px;
    }
    .skill{
        height: 300px;
        width: 550px;
        margin: 1rem;
        border-top: ridge;
        border-bottom: ridge;
    }
`;

function ProfileInfo(props) {
    return (
        <ProfileStyle>
            <div className='mainprofile'>
                <div className='avadiv'>
                <img className="avatar" alt='' src={Avatar} />
                <h4>Alex Rubanov</h4>
                </div>
                <div className='profiledata'>
                    <div className='skill'></div>
                </div>
            </div>
        </ProfileStyle>
    )
}

export default ProfileInfo;