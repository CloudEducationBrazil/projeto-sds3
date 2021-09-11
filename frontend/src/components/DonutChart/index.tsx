import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sale';
import { useState, useEffect } from 'react';

type ChartData = { labels: string[]; series: number[] };

const DonutChart = () => {
  //  const mockData = {
  //    series: [477138, 499928, 444867, 220426, 473088],
  //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
  //  };

  // useState = manter estado no compenente
  // useEffect = executar algo na instanciacao ou destruicap do component, obesrvar estado

  // FORMA ERRADA
  //let chartData: ChartData = { labels: [], series: [] };

  // FORMA CERTA
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  // FORMA ERRADA requisicao assincrona
  //axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
  //  const data = response.data as SaleSum[];
  //  const myLabels = data.map((x) => x.sellerName);
  //  const mySeries = data.map((x) => x.sum);
  // chartData = { labels: myLabels, series: mySeries };
  //    console.log(chartData);
  //  });

  // FORMA CERTA requisicao assincrona
  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
      const data = response.data as SaleSum[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => x.sum);

      setChartData({ labels: myLabels, series: mySeries });
      //console.log(chartData);
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      //options={{ ...options, labels: mockData.labels }}
      options={{ ...options, labels: chartData.labels }}
      //series={mockData.series}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
