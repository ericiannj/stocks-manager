import styled from 'styled-components'
import colors from '@/styles/colors'

export const NewsPanelContainer = styled.div`
    height: 380px;
    width: 748px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${colors.white};
    border-radius: 8px;
    margin-bottom: 42px;
    padding: 25px 20px;
    padding-bottom: 20px;
    height: 80vh;
`

export const NewsImageContainer = styled.div`
    text-align: center;
    margin-bottom: 15px;
`

export const NewsImage = styled.img`
    height: 32px;
    width: 32px;
    margin-left: auto;
    border-radius: 20px;
    object-fit: contain;
`
