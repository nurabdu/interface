import React from 'react';
import styled from 'styled-components';

const ProfileStyle = styled.div`
`;
const Profile = (props) => {
    return (
        <ProfileStyle>
            <div>
                <div>
                    <img src='' />
                </div>
                <div><span>{props.name}</span><span>{props.surname}</span></div>
            </div>
        </ProfileStyle>
    )
}
export default Profile;