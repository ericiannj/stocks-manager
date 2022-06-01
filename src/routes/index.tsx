import React from 'react'
import { Routes as SwitchRoutes, Route } from 'react-router-dom'

import { Home, News } from '@/pages'

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
        </SwitchRoutes>
    )
}

export default Routes
