import { Animations } from 'chart.js';
import React from 'react';
import {Pie} from 'react-chartjs-2'
/**
 * Renders a pie chart component.
 * @param {Object} props - The component props.
 * @param {Array} props.chartData - The data for the pie chart.
 * @returns {JSX.Element} The rendered pie chart component.
 */
function PieChart({chartData}) {
    return <Pie data = {chartData} />      
}

export default PieChart;