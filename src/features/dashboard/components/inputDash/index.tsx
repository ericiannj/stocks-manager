import React from 'react'
import {
    InputDiv,
    InputStock,
    SearchButton,
    SearchButtonImage,
} from '@/features/dashboard/components/inputDash/styled'
import SearchIcon from '@/assets/icons/search-icon.png'
import { connect } from 'react-redux'
import { ApplicationState } from '@/store'
import { Stock } from '@/store/ducks/stocks/types'
import * as StocksActions from '@/store/ducks/stocks/actions'
import { bindActionCreators, Dispatch } from 'redux'

type StateProps = {
    stock: Stock
}

type DispatchProps = {
    loadRequest(): void
    loadSuccess(data: Stock): void
}

type Props = StateProps & DispatchProps

const InputDash: React.FC<Props> = () => {
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

const mapStateToProps = (state: ApplicationState) => ({
    stock: state.stock.data,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(StocksActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InputDash)
