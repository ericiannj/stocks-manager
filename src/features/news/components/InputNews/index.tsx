import React from 'react'
import { InputDiv, InputStock, SearchButton, SearchButtonImage } from './styled'
import SearchIcon from '@/assets/icons/search-icon.png'

const InputNews: React.FC = () => {
    return (
        <>
            <InputDiv>
                <InputStock placeholder="Search for News" />
                <SearchButton type="submit">
                    <SearchButtonImage src={SearchIcon} />
                </SearchButton>
            </InputDiv>
        </>
    )
}

export default InputNews
