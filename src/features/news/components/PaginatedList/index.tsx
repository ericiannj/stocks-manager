import React, { useState } from 'react'
import NewsList from './NewsList'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'

const PaginatedList = () => {
    const news = useSelector((store: ApplicationState) => store.news.newsData)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentNews = news.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <>
            <NewsList list={currentNews} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={news.length}
                paginate={paginate}
            />
        </>
    )
}

export default PaginatedList
