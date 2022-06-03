import React from 'react'
import {
    PaginationButton,
    PaginationButtonsContainer,
    PaginationContainer,
} from './styled'

type IPaginationProps = {
    postsPerPage: number
    totalPosts: number
    paginate: (arg: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({
    postsPerPage,
    totalPosts,
    paginate,
}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <PaginationContainer>
                <PaginationButtonsContainer>
                    {pageNumbers.map(number => (
                        <PaginationButton
                            key={number}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </PaginationButton>
                    ))}
                </PaginationButtonsContainer>
            </PaginationContainer>
        </>
    )
}

export default Pagination

{
    /* <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li> */
}
