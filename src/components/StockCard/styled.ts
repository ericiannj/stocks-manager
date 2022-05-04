import styled from 'styled-components'

export const StockCardContainer = styled.div`
    height: 73px;
    width: 299px;
    background-color: white;
    padding: 16px 16px;
    box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
    border-radius: 8px;
    margin-right: 21px;
`

export const StockCardTextContainer = styled.div`
    display: inline-block;
    margin-left: 12px;
`

export const StockCardDataContainer = styled.div`
    margin-left: 12px;
    float: right;
    margin-top: 12px;
    margin-right: 5px;
`

export const StockCardImage = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 100%;
    vertical-align: sub;
`

export const StockCardSymbol = styled.h1`
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
`

export const StockCardName = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`

export const StockCardData = styled.p`
    font-size: 16px;
    color: green;
`
