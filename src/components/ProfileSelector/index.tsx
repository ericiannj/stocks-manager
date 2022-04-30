import React from 'react'
import { ProfileSelect, ProfileAvatar, ProfileDiv } from './styled'

import ProfileIcon from '../../assets/icons/profile-icon.png'

const ProfileSelector: React.FC = () => {
    return (
        <>
            <ProfileDiv>
                <ProfileSelect>
                    <option value="1">João da Silva Almeida Magalhães</option>
                    <option value="2">Eric Ian</option>
                </ProfileSelect>
                <ProfileAvatar src={ProfileIcon} />
            </ProfileDiv>
        </>
    )
}

export default ProfileSelector
