import styled from 'styled-components'
import colors from '@/styles/colors'

export const RecentHeaderContainer = styled.div`
    display: flex;
`

export const DeleteRecentButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    height: 1px;
    margin-left: 40px;
    margin-top: 28px;
`

export const TrashImage = styled.img`
    height: 24px;
    width: 24px;
`

export const RecentStocksContainer = styled.div`
    display: inline-flex;
    width: 100%;
    overflow: auto;
    overflow-y: hidden;
    height: 110px;

    &::-webkit-scrollbar {
        width: 1px;
        height: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.primary};
        border-radius: 20px;
    }
`

export const RecentStockContainer = styled.div`
    display: inline-flex;
    margin-right: 21px;
    height: fit-content;
    border-radius: 8px;
`
