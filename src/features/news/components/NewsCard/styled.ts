import styled from 'styled-components'
import colors from '@/styles/colors'

export const NewsContainer = styled.div`
    width: 700px;
    height: 300px;
    margin: auto;
    margin-bottom: 30px;
    padding: 16px;
    box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.2);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
`

export const NewsTextContainer = styled.div`
    margin-right: 20px;
`

export const NewsTitle = styled.h1`
    font-size: 18px;
    max-width: 400px;
    text-align: center;
    margin-top: 30px;
`

export const NewsSubtitle = styled.h3`
    font-size: 14px;
    color: ${colors.gray02};
    max-width: 400px;
    text-align: center;
    margin-top: 10px;
`

export const NewsText = styled.p`
    font-size: 14px;
    max-width: 400px;
    margin-top: 20px;
`

export const NewsImage = styled.img`
    width: 250px;
    height: 138px;
    border-radius: 8px;
    background-color: ${colors.gray02};
    margin: auto;
    object-fit: contain;
`
