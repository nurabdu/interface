import React from 'react';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileStyle = styled.div`
`;
const Profile = (props) => {
    return (
        <ProfileStyle>
            <ProfileInfo/>
            <div>
                <div>
                </div>
            </div>
        </ProfileStyle>
    )
}
export default Profile;