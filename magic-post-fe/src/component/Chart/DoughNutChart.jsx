import { Doughnut } from 'react-chartjs-2';
import React from 'react';

/**
 * Renders a doughnut chart component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.chartData - The data for the chart.
 * @returns {JSX.Element} The rendered doughnut chart component.
 */
function DoughnutChart({ chartData }) {
  return <Doughnut data={chartData} options={{ animation: { animateRotate: true, animateScale: true } }} />;
}

export default DoughnutChart;