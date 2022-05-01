import React from 'react'
import {
    InputDiv,
    InputStock,
    SearchButton,
    SearchButtonImage,
} from '@/features/dashboard/components/inputDash/styled'
import SearchIcon from '@/assets/icons/search-icon.png'

const InputDash: React.FC = () => {
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

export default InputDash
