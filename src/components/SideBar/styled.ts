import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../styles/colors'

export const SideBarContainer = styled.div`
    height: 100vh;
    width: 7.5%;
    padding-top: 20px;
`

export const SideBarLogo = styled.img`
    height: 46px;
    width: 46px;
    display: block;
    margin: 0 auto 55px auto;
`

export const SideBarLinkContainer = styled.div`
    padding-top: 8px;
`

export const SideBarLink = styled(Link)`
    text-decoration: none;
    color: green;
`

export const SideBarLinkImage = styled.img`
    height: 32px;
    width: 32px;
    display: block;
    margin-right: auto;
    margin-left: auto;
`

export const SideBarSelectedIndicator = styled.div`
    width: 4px;
    height: 48px;
    background-color: ${colors.secondary};
    border-radius: 0px 12px 12px 0px;
    float: left;
`
