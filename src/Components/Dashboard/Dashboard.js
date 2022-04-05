import React from 'react';
import './Dashboard.css'
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (

        <div className='my-chart'>

            <div>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                </LineChart>
                {/* <LineChart width={600} height={300} data1={data}></LineChart>
            <Line dataKey="investment"></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis dataKey="sell"></YAxis> */}
                {/* <Line dataKey='sell' stroke="#8884d8" /></Line> */}
            </div>
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="revenue"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="investment" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;