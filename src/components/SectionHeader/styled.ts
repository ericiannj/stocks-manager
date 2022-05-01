import styled from 'styled-components'
import colors from '@/styles/colors'

export const SectionTitleContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 27px;
    margin-bottom: 24px;
`

export const SectionTitleText = styled.h1`
    font-size: 18px;
    color: ${colors.gray03};
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.15px;
    line-height: 27px;
    margin-top: 27px;
    display: contents;
`

export const SectionTitleIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 10px;
    vertical-align: sub;
`
