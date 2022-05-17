import React, { useState } from 'react'
import {
    InputDiv,
    InputStock,
    SearchButton,
    SearchButtonImage,
} from '@/features/dashboard/components/InputDash/styled'
import SearchIcon from '@/assets/icons/search-icon.png'
import { loadRequest } from '@/store/ducks/stocks/actions'
import { useDispatch } from 'react-redux'

const InputDash: React.FC = () => {
    const [symbol, setSymbol] = useState('')
    const dispatch = useDispatch()

    const searchStock = (e: any) => {
        e.preventDefault()
        dispatch(loadRequest(symbol))
    }

    return (
        <>
            <InputDiv onSubmit={searchStock}>
                <InputStock
                    placeholder="Buscar empresa"
                    onChange={e => setSymbol(e.target.value)}
                />
                <SearchButton type="submit">
                    <SearchButtonImage src={SearchIcon} />
                </SearchButton>
            </InputDiv>
        </>
    )
}

export default InputDash
