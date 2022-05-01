import React, { useState } from 'react'
import {
    ProfileSelect,
    ProfileAvatar,
    ProfileDiv,
    ProfileIconContainer,
    ProfileArrowIcon,
} from './styled'
import ProfileIcon from '@/assets/icons/profile-icon.png'
import ProfileIcon2 from '@/assets/icons/profile-icon2.png'
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
                    <option value="2">Ana Paula da Silva Magalhães</option>
                </ProfileSelect>
                <ProfileAvatar
                    src={stateImage == true ? ProfileIcon : ProfileIcon2}
                />
                <ProfileIconContainer>
                    <ProfileArrowIcon src={ArrowIcon} />
                </ProfileIconContainer>
            </ProfileDiv>
        </>
    )
}

export default ProfileSelector
