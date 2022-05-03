import React, { useState } from 'react'
import {
    InputDiv,
    InputStock,
    SearchButton,
    SearchButtonImage,
} from '@/features/dashboard/components/inputDash/styled'
import SearchIcon from '@/assets/icons/search-icon.png'
import { loadRequest } from '@/store/ducks/stocks/actions'
import { useDispatch } from 'react-redux'

const InputDash: React.FC = () => {
    const [symbol, setSymbol] = useState('')
    const dispatch = useDispatch()

    const searchStock = () => {
        dispatch(loadRequest(symbol))
    }

    return (
        <>
            <InputDiv>
                <InputStock
                    placeholder="Buscar empresa"
                    onChange={e => setSymbol(e.target.value)}
                />
                <SearchButton onClick={searchStock}>
                    <SearchButtonImage src={SearchIcon} />
                </SearchButton>
            </InputDiv>
        </>
    )
}

export default InputDash
