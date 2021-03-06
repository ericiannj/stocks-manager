import styled from 'styled-components'
import colors from '@/styles/colors'

export const GlobalContainer = styled.div`
    height: 100vh;
    width: 1280px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

export const DashboardContainer = styled.div`
    width: 61.5%;
    border-radius: 24px 0px 0px 0px;
    padding: 0 22px;
    background-color: ${colors.gray01};
`

export const ProfileContainer = styled.div`
    height: 100vh;
    width: 31%;
    padding: 32px 20px;
`
