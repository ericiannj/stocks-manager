import styled from 'styled-components'
import colors from '@/styles/colors'

export const InputDiv = styled.form`
    height: 40px;
    width: 364px;
    border-radius: 8px;
    margin-top: 40px;
    margin-bottom: 24px;
    position: relative;
`

export const InputStock = styled.input`
    height: 40px;
    width: 364px;
    border-radius: 8px;
    padding: 8px 16px;
    border: 1px solid ${colors.borderGray};
    outline: none;

    &:focus {
        border: 1px solid ${colors.primary};
    }
`

export const SearchButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${colors.primary};
    border: none;
    position: absolute;
    right: 0;
`

export const SearchButtonImage = styled.img`
    height: 24px;
    width: 24px;
`
