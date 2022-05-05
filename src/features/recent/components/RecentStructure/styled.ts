import styled from 'styled-components'
import colors from '@/styles/colors'

export const RecentHeaderContainer = styled.div`
    display: flex;
`

export const DeleteRecentButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-left: 40px;
    padding-top: 6px;
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

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.primary};
        border-radius: 20px;
    }
`
