import Chart from 'react-apexcharts';
import axios from 'axios';
import { BASE_ULR } from 'utils/request';
import { AmountGroupedBySeller } from 'types/Sale';
import { useEffect, useState } from 'react';

type ChartData = {
    labels: string[];
    series: number[];
};

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_ULR}/sales/amountGroupedBySeller`)
            .then(response => {
                const data = response.data as AmountGroupedBySeller[];

                const l = data.map(x => x.sellerName)
                const s = data.map(x => x.sumSales)

                setChartData({ labels: l, series: s })
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    };
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}

export default DonutChart;