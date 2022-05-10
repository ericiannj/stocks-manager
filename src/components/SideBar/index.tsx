import React from 'react'
import {
    SideBarContainer,
    SideBarLinkContainer,
    SideBarLink,
    SideBarLinkImage,
    SideBarLogo,
    SideBarSelectedIndicator,
} from './styled'
import Logo from '@/assets/icons/stock-icon.png'
import HomeLink from '@/assets/icons/home.png'

const SideBar: React.FC = () => {
    return (
        <>
            <SideBarContainer>
                <SideBarLogo src={Logo} />
                <SideBarLink to="/">
                    <SideBarSelectedIndicator />
                    <SideBarLinkContainer>
                        <SideBarLinkImage src={HomeLink} />
                    </SideBarLinkContainer>
                </SideBarLink>
            </SideBarContainer>
        </>
    )
}

export default SideBar
