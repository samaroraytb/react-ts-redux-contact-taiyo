import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Line } from "react-chartjs-2";



import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";


const LineChart = () => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const callToSetLineData = async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const resData = await response.json();
      if (response.ok === true) {
        const newChartData = {
          labels: Object.keys(resData.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(resData.cases),
              fill: false,
              borderColor: "#f4544c",
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      }
    };

    callToSetLineData();
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold mb-5 text-[#f4544c]">
        Corona Cases Chart
      </h1>
      <div className=" border w-full  m-auto 10 auto 10 md:h-[450px] md:flex md:justify-center">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-[#f4544c] m-5 ">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default LineChart;
