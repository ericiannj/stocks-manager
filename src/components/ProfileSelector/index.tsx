import React, { useState } from 'react'
import {
    ProfileSelect,
    ProfileAvatar,
    ProfileDiv,
    ProfileIconContainer,
    ProfileArrowIcon,
} from './styled'
import ProfileIcon from '@/assets/icons/profile-icon.png'
import ArrowIcon from '@/assets/icons/select-icon.png'

const ProfileSelector: React.FC = () => {
    const [stateImage, setStateImage] = useState(true)
    const changeImage = () => {
        setStateImage(!stateImage)
    }

    return (
        <>
            <ProfileDiv>
                <ProfileSelect onChange={() => changeImage()}>
                    <option value="1">João da Silva Almeida Magalhães</option>
                </ProfileSelect>
                <ProfileAvatar src={ProfileIcon} />
                <ProfileIconContainer>
                    <ProfileArrowIcon src={ArrowIcon} />
                </ProfileIconContainer>
            </ProfileDiv>
        </>
    )
}

export default ProfileSelector
