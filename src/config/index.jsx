export const defaultConfig = {
  mapsDefaultColor: '#FFFFFF',
  mapsProjectionConfig: {
    scale: 125,
  },
  mapsGeographyStyle: {
    default: {
      outline: 'none',
    },
    hover: {
      fill: '#263238',
      transition: 'all 750ms',
      outline: 'none',
      cursor: 'pointer',
    },
    pressed: {
      outline: 'none',
    },
  },
  chartsURL: `https://api.covid19api.com/total/dayone/country/`,
  chartsOptions: {
    legend: {
      position: 'bottom',
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Count',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
          },
        },
      ],
    },
  },
  chartsDatasetGeneric: {
    fill: false,
    lineTension: 0.1,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    pointHoverBorderColor: 'rgba(220,220,220,1)',
  },
};
