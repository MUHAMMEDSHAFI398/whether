"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const labels = ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7"];

const chartData = {
  Temperature: [22, 21, 23, 26, 29, 28, 25, 32],
  Rainfall: [0, 1.2, 0.8, 0, 0, 2.1, 1.5, 0],
  "Soil Temperature": [20, 21, 22, 23, 24, 24, 23, 21],
  "Soil Moisture": [35, 34, 36, 37, 38, 39, 37, 36],
};

const colors = {
  Temperature: "#38bdf8",
  Rainfall: "#34d399",
  "Soil Temperature": "#fbbf24",
  "Soil Moisture": "#a78bfa",
};

const yUnits = {
  Temperature: "°C",
  Rainfall: "mm",
  "Soil Temperature": "°C",
  "Soil Moisture": "%",
};

const WeatherChart = () => {
  const [selectedOption, setSelectedOption] = useState("Temperature");
  const [values, setValues] = useState(chartData.Temperature);

  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        // const res = await axios.get("https://api.example.com/data");
        setValues(chartData[selectedOption]);
      } catch (err) {
        // error handling
        // setError(err);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

 useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        // const res = await axios.get("https://api.example.com/data");
        setValues(chartData[selectedOption]);
      } catch (err) {
        // setError(err);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3600000);
    return () => clearInterval(intervalId);
  }, [selectedOption]); 

  const onOptionClick = (e,option) => {
     setSelectedOption(option)
     setValues(chartData[option])
  }

  const data = {
    labels,
    datasets: [
      {
        label: `${selectedOption}`,
        data: values,
        borderColor: colors[selectedOption],
        backgroundColor: colors[selectedOption] + "33",
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: {
          color: "#fff",
          callback: function (value) {
            return `${value} ${yUnits[selectedOption] || ""}`;
          },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  const chartOptions = [
    "Temperature",
    "Rainfall",
    "Soil Temperature",
    "Soil Moisture",
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {chartOptions.map((option) => (
          <button
            key={option}
            onClick={(e) => onOptionClick(e, option)}
            className={`px-4 py-1.5 rounded-full border text-sm transition ${
              selectedOption === option
                ? "bg-white text-black font-semibold"
                : "bg-transparent border-white text-white hover:bg-white/20"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
