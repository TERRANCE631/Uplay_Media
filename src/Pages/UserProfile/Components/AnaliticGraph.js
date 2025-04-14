import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'
import { stats } from './Dashboard'

export function AnaliticGraph() {
    return (
        <div className="reletive h-[400px] mt-2 pt-4 md:w-full flex justify-center border items-center rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    margin={{
                        top: 0,
                        right: 24,
                        left: 0,
                        bottom: 0
                    }}
                    width={500}
                    height={300}
                    data={stats}
                >
                    <CartesianGrid strokeDasharray="1 3" className="" />
                    <XAxis
                        dataKey="title"
                        className="font-bold text-sm"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        className="font-bold text-sm"
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        wrapperClassName="rounded text-sm text-white"
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="downnloads"
                        stroke="yellow"
                        fill="yellow"
                        activeDot={{ r: 10 }}
                        dot={{ r: 10 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="likes"
                        stroke="blue"
                        fill="blue"
                        activeDot={{ r: 10 }}
                        dot={{ r: 10 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke="green"
                        fill="green"
                        activeDot={{ r: 10 }}
                        dot={{ r: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
