import React from 'react'
import EmptyIcon from '@/assets/icons/empty-news-icon.png'
import {
    EmptyNewsContainer,
    EmptyNewsImage,
    EmptyNewsImageContainer,
    EmptyNewsTitle,
} from './styled'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'
import NewsCard from '../NewsCard'
import moment from 'moment'

const StockInfo: React.FC = () => {
    const news = useSelector((store: ApplicationState) => store.news.newsData)

    console.log(news)

    return (
        <>
            {news.length === 0 ? (
                <EmptyNewsContainer>
                    <EmptyNewsTitle>
                        Search for a company's News by its symbol
                    </EmptyNewsTitle>
                    <EmptyNewsImageContainer>
                        <EmptyNewsImage src={EmptyIcon} />
                    </EmptyNewsImageContainer>
                </EmptyNewsContainer>
            ) : (
                news.map(info => (
                    <NewsCard
                        title={info.headline}
                        source={info.source}
                        datetime={moment(info.datetime).format('MM/DD/YY')}
                        text={
                            info.summary.length > 450
                                ? info.summary.substring(0, 450) + '...'
                                : info.summary
                        }
                        image={info.image}
                    />
                ))
            )}
        </>
    )
}

export default StockInfo
