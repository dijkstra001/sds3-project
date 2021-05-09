import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SuccessIndicator } from 'types/Sale';
import { StringMappingType } from 'typescript';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/request';

type SeriesData = {
    name: string,
    data: number[]
};;

type ChartData = {
    labels: {
        categories: string[]
    };
    series: SeriesData[]
};

const BarChart = () => {

    const [charData, setChartData] = useState<ChartData>({
        labels: {categories: []}, series: [{name: "", data: []}]});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/successIndicatorBySeller`)
            .then(response => {
                const data = response.data as SuccessIndicator[];

                const l = data.map(x => x.sellerName)
                const s = data.map(x => round((x.deals / x.visited) * 100, 1))

                setChartData({labels: {categories: l}, series: [{name: "% Sucesso", data: s}]});
    });

}, []);

const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};

return (
    <Chart
        options={{ ...options, xaxis: charData.labels }}
        series={charData.series}
        type="bar"
        height="240"
    />
)
}

export default BarChart;