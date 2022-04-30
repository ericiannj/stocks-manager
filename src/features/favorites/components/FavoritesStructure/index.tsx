import React from 'react'
import { SectionHeader } from '@/components'
import FullStarIcon from '@/assets/icons/star-full-icon.png'

const FavoritesStructure: React.FC = () => {
    return (
        <>
            <SectionHeader title="Empresas favoritas" icon={FullStarIcon} />
        </>
    )
}

export default FavoritesStructure
