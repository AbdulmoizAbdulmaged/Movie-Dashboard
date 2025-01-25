
import { Line, Bar } from "react-chartjs-2";
import './barChart.css'
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register all required components
ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function BarChartComponent({data}) {

  
  const nominationsPerYear = data.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = 0;
    }
    acc[movie.year] += movie.oscar_nominations;
      
    return acc;
  }, {});
  const nominations = Object.values(nominationsPerYear);
  const years = Object.keys(nominationsPerYear);


  const winsPerYear = data.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = 0;
    }
    acc[movie.year] += movie.oscar_winning;
      
    return acc;
  }, {});
  const wins = Object.values(winsPerYear);
 


// Line chart data
const lineData = {
  labels: years,
  datasets: [
    {
      label: "Nominations",
      data: nominations,
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.1)",
      tension: 0.4,
    },
    {
      label: "Wins",
      data: wins,
      borderColor: "green",
      backgroundColor: "rgba(0, 255, 0, 0.1)",
      tension: 0.4,
    },
  ],
};

// Bar chart data
const barData = {
  labels: years,
  datasets: [
    {
      label: "Win Percentage",
      data: nominations.map((nom, idx) => ((wins[idx] / nom) * 100).toFixed(2)),
      backgroundColor: "orange",
      borderColor: "darkorange",
      borderWidth: 1,
    },
  ],
};

// Common chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year",
      },
    },
    y: {
      title: {
        display: true,
        text: "Count / Percentage",
      },
    },
  },
};

return (
  <div className="container">
    <h2>Oscar Statistics Overview</h2>
    <div style={{  margin: "0 auto",width: "80%" }}>
      <h3>Line Chart: Nominations and Wins Over Time</h3>
      <Line data={lineData} options={options} />
    </div>
    <div style={{  margin: "0 auto", marginTop: "2rem", width: "80%" }}>
      <h3>Bar Chart: Win Percentage by Year</h3>
      <Bar data={barData} options={options} />
    </div>
  </div>
);
}

BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
    })
  ).isRequired,
};
BarChartComponent.propTypes = {};

export default BarChartComponent;
