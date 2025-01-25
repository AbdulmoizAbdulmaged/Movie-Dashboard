import './countryPieChart.css';
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const CountryPieChart = ({ data }) => {
  // Aggregate country data
  const countryCounts = data.reduce((acc, movie) => {
    movie.country.forEach((country) => {
      acc[country] = (acc[country] || 0) + 1;
    });
    return acc;
  }, {});
  
   

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(countryCounts), // Country names
    datasets: [
      {
        label: "Movies by Country",
        data: Object.values(countryCounts), // Movie counts
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
          "#8DD1E1", "#D0ED57", "#F48C42", "#FFABAB"
        ],
        hoverBackgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
          "#8DD1E1", "#D0ED57", "#F48C42", "#FFABAB"
        ],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data.reduce((acc, value) => acc + value, 0);
            const currentValue = tooltipItem.raw;
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}% (${currentValue}) of ${total}`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart">
      <h3>Movies by Country</h3>
      <Pie data={chartData} options={options} />
    </div>
  );
};
CountryPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};


export default CountryPieChart;
