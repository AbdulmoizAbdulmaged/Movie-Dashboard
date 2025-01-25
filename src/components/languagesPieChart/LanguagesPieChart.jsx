
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import './languagesPieChart.css';

function LanguagesPieChart({data}) {

  // Aggregate language data
  const languageCounts = data.reduce((acc, movie) => {
    movie.language.forEach((language) => {
      acc[language] = (acc[language] || 0) + 1;
    });
    return acc;
  }, {});
 
  
   
    // Prepare data for the chart
  const chartData = {
    labels: Object.keys(languageCounts), // language names
    datasets: [
      {
        label: "Movies by language",
        data: Object.values(languageCounts), // Movie counts
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
    <div className='pie-chart'>
       <h3>Movies by Language</h3>
            <Pie data={chartData} options={options} />
    </div>
  )
}
LanguagesPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};


export default LanguagesPieChart
