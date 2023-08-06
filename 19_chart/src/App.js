import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { bulan: 'Januari', produkA: 400, produkB: 240, produkC: 220 },
    { bulan: 'Februari', produkA: 300, produkB: 240, produkC: 200 },
    { bulan: 'Maret', produkA: 230, produkB: 250, produkC: 250 },
    { bulan: 'April', produkA: 300, produkB: 300, produkC: 240 },
    { bulan: 'Mei', produkA: 350, produkB: 320, produkC: 220 },
];

class App extends React.Component {
    render() {
        return (
            <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='bulan' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='produkA' fill='#8884d8' />
                <Bar dataKey='produkB' fill='#82ca9d' />
            </BarChart>
        );
    }
}

export default App;
