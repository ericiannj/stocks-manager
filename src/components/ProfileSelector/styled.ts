import styled from 'styled-components'
import colors from '@/styles/colors'

export const ProfileDiv = styled.div`
    position: relative;
    width: 346px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 38px;
`

export const ProfileSelect = styled.select`
    height: 32px;
    width: 346px;
    border: 1px solid rgba(0, 71, 187, 0.2);
    color: ${colors.primary};
    font-size: 12px;
    padding-left: 40px;
    box-sizing: border-box;
    border-radius: 120px;
    -webkit-appearance: none;

    option {
        color: ${colors.primary};
        background: white;
        display: flex;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`

export const ProfileAvatar = styled.img`
    height: 32px;
    width: 32px;
    background-color: ${colors.primary};
    border-radius: 120px;
    position: absolute;
    left: 0px;
`

export const ProfileIconContainer = styled.div`
    position: absolute;
    top: 6px;
    right: 15px;
`

export const ProfileArrowIcon = styled.img`
    height: 6px;
    width: 12px;
`
