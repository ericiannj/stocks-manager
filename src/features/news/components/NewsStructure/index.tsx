import React from 'react'
import { PageHeader } from '@/components'
import NewspaperIcon from '@/assets/icons/newspaper-icon.png'
import InputNews from '../InputNews'
import NewsPanel from '../NewsPanel'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewsStructure: React.FC = () => {
    const newsError = useSelector((store: ApplicationState) => store.news.error)

    return (
        <>
            {newsError === true &&
                toast.error(
                    'Search failure! Check your connection and the stock symbol.',
                    {
                        position: toast.POSITION.TOP_CENTER,
                    }
                ) && <ToastContainer />}
            <PageHeader title="News" icon={NewspaperIcon} />
            <InputNews />
            <NewsPanel />
        </>
    )
}

export default NewsStructure
