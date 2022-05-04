import styled from 'styled-components'
import colors from '@/styles/colors'

export const DashboardPanelContainer = styled.div`
    height: 380px;
    width: 748px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${colors.white};
    border-radius: 8px;
    margin-bottom: 42px;
    padding: 25px 20px;
    padding-bottom: 20px;
`

export const StockInfoContainer = styled.div`
    width: 100%;
`

export const StockTextContainer = styled.div`
    display: inline-block;
    margin-left: 12px;
`

export const StockSymbol = styled.h1`
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
`

export const StockCompanyName = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`

export const StockDataContainer = styled.div`
    margin-left: 12px;
    float: right;
    margin-top: 12px;
    margin-right: 5px;
`

export const StockData = styled.p`
    font-size: 16px;
    font-weight: 700;
`
