import React from 'react'
import { InputDiv, InputStock, SearchButton, SearchButtonImage } from './styled'

import SearchIcon from '../../../../assets/icons/search-icon.png'

const inputDash: React.FC = () => {
    return (
        <>
            <InputDiv>
                <InputStock placeholder="Buscar empresa" />
                <SearchButton>
                    <SearchButtonImage src={SearchIcon} />
                </SearchButton>
            </InputDiv>
        </>
    )
}

export default inputDash
