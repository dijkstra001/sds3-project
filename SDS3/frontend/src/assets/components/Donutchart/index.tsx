import Chart from 'react-apexcharts';
import axios from 'axios';
import { BASE_ULR } from 'utils/request';
import { AmountGroupedBySeller } from 'types/Sale';

type ChartData = {
    labels: string[];
    series: number[];
};

const DonutChart = () => {

    let chartData: ChartData = {labels: [], series: []};

    axios.get(`${BASE_ULR}/sales/amountGroupedBySeller`)
    .then(response => {
        const data = response.data as AmountGroupedBySeller[];

        const l = data.map(x => x.sellerName)
        const s = data.map(x => x.sumsales)

        chartData = {labels: l, series: s}

        console.log(response.data)
    })

    const options = {
        legend: {
            show: true
        }
    };
    return (
        <Chart
            options={{ ...options, labels : chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}

export default DonutChart;