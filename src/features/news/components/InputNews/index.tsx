import React, { useState } from 'react'
import { InputDiv, InputStock, SearchButton, SearchButtonImage } from './styled'
import SearchIcon from '@/assets/icons/search-icon.png'
import { useDispatch } from 'react-redux'
import { loadRequest } from '@/store/ducks/news/actions'

const InputNews: React.FC = () => {
    const [symbol, setSymbol] = useState('')
    const dispatch = useDispatch()

    const searchNews = (e: any) => {
        e.preventDefault()
        dispatch(loadRequest(symbol))
    }

    return (
        <>
            <InputDiv onSubmit={searchNews}>
                <InputStock
                    placeholder="Search for News"
                    onChange={e => setSymbol(e.target.value)}
                />
                <SearchButton type="submit">
                    <SearchButtonImage src={SearchIcon} />
                </SearchButton>
            </InputDiv>
        </>
    )
}

export default InputNews
