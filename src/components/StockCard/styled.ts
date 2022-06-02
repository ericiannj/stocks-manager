import styled from 'styled-components'

export const StockCardContainer = styled.div`
    height: 73px;
    min-width: 299px;
    background-color: white;
    padding: 16px;
    box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
    border-radius: 8px;
    cursor: pointer;
`

export const StockCardTextContainer = styled.div`
    display: inline-block;
    margin-left: 12px;
    margin-bottom: 5px;
`

export const StockCardDataContainer = styled.div`
    margin-left: 12px;
    display: flex;
    float: right;
    margin-right: 5px;
`

export const StockCardImage = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 100%;
    vertical-align: sub;
    object-fit: contain;
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

type StockCardDataProps = {
    data?: number
}

export const StockCardData = styled.p<StockCardDataProps>`
    font-size: 16px;
    padding-top: 9px;
    color: ${props => (props.data! >= 0 ? '#79C300' : '#D64B45')};
`

export const GraphImage = styled.img`
    height: 36px;
    width: 16px;
    margin-left: 8px;
`
