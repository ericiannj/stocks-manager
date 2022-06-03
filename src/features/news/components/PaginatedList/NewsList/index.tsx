import { News } from '@/store/ducks/news/types'
import moment from 'moment'
import NewsCard from '../../NewsCard'

type INewsProps = {
    list: News[]
}

const NewsList: React.FC<INewsProps> = news => {
    return (
        <>
            {news.list.map(info => (
                <NewsCard
                    key={info.url}
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
            ))}
        </>
    )
}

export default NewsList
