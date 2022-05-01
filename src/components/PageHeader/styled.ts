import styled from 'styled-components'
import colors from '@/styles/colors'

export const PageTitleContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 27px;
`
export const PageTitleText = styled.h1`
    font-size: 24px;
    color: ${colors.gray03};
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.15px;
    line-height: 28px;
    display: contents;
`

export const PageTitleIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 10px;
    vertical-align: sub;
`
