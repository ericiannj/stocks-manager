import { ApplicationState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import './style.css'

const StockChart: React.FC = () => {
    const stockHistory = useSelector(
        (store: ApplicationState) => store.stocks.dataHistory
    )

    const FilteredHistory = stockHistory.filter(
        (stock, index) => index % 30 === 0
    )

    return (
        <div className="stock-chart-container">
            <AreaChart
                width={750}
                height={280}
                data={FilteredHistory}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <defs>
                    <linearGradient id="avarage" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#0047BB"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#0047BB"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey={'minute'} />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="marketAverage"
                    stroke="#0047BB"
                    fill="url(#avarage)"
                />
            </AreaChart>
        </div>
    )
}

export default StockChart
