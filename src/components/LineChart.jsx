import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '')
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec)
      return '' + Math.round(n * k) / k
    }
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },

  // scales: {
  //   xAxes: [
  //     {
  //       time: {
  //         unit: 'date',
  //       },
  //       gridLines: {
  //         display: false,
  //         drawBorder: false,
  //       },
  //       ticks: {
  //         maxTicksLimit: 7,
  //       },
  //     },
  //   ],
  //   yAxes: [
  //     {
  //       ticks: {
  //         stepSize: 0.5,
  //         maxTicksLimit: 5,
  //         padding: 10,
  //         // Include a dollar sign in the ticks
  //         callback: function (value, index, values) {
  //           return '$' + number_format(value)
  //         },
  //       },
  //       gridLines: {
  //         color: 'rgb(234, 236, 244)',
  //         zeroLineColor: 'rgb(234, 236, 244)',
  //         drawBorder: false,
  //         borderDash: [2],
  //         zeroLineBorderDash: [2],
  //       },
  //     },
  //   ],
  // },
  // legend: {
  //   display: false,
  // },
  // tooltips: {
  //   backgroundColor: 'rgb(255,255,255)',
  //   bodyFontColor: '#858796',
  //   titleMarginBottom: 10,
  //   titleFontColor: '#6e707e',
  //   titleFontSize: 14,
  //   borderColor: '#dddfeb',
  //   borderWidth: 1,
  //   xPadding: 15,
  //   yPadding: 15,
  //   displayColors: false,
  //   intersect: false,
  //   mode: 'index',
  //   caretPadding: 10,
  //   callbacks: {
  //     label: function (tooltipItem, chart) {
  //       var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || ''
  //       return datasetLabel + ': $' + number_format(tooltipItem.yLabel)
  //     },
  //   },
  // },
}

export const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Earnings',
      lineTension: 0.3,
      backgroundColor: 'rgba(78, 115, 223, 0.05)',
      borderColor: 'rgba(78, 115, 223, 1)',
      pointRadius: 3,
      pointBackgroundColor: 'rgba(78, 115, 223, 1)',
      pointBorderColor: 'rgba(78, 115, 223, 1)',
      pointHoverRadius: 3,
      pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
      pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
    },
  ],
}

const Charts = () => {
  return <Line options={options} data={data} />
}

export default Charts
