import React from 'react'
import { Routes as SwitchRoutes, Route } from 'react-router-dom'

import Home from '../pages/Home'

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path="/" element={<Home />} />
        </SwitchRoutes>
    )
}

export default Routes
