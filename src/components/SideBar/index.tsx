import React from 'react'
import {
    SideBarContainer,
    SideBarLinkContainer,
    SideBarLink,
    SideBarLinkImage,
    SideBarLogo,
    SideBarSelectedIndicator,
} from './styled'
import Logo from '@/assets/icons/logo-icon.png'
import HomeLink from '@/assets/icons/home.png'
import NewsLink from '@/assets/icons/news-icon.png'

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
                <SideBarLink to="/news">
                    <SideBarSelectedIndicator />
                    <SideBarLinkContainer>
                        <SideBarLinkImage src={NewsLink} />
                    </SideBarLinkContainer>
                </SideBarLink>
            </SideBarContainer>
        </>
    )
}

export default SideBar
