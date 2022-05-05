import { ApplicationState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import './style.css'

const StockChart: React.FC = () => {
    const stockHistory = useSelector(
        (store: ApplicationState) => store.stocks.dataHistory
    )

    console.log(stockHistory)

    return (
        <div className="stock-chart-container">
            <AreaChart
                width={750}
                height={280}
                data={stockHistory}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="minute" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="marketAverage"
                    stroke="#0047BB"
                    fill="#0047BB"
                />
            </AreaChart>
        </div>
    )
}

export default StockChart
