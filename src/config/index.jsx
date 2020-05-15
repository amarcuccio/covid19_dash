import {
  ReactLogo,
  NodejsLogo,
  YarnLogo,
  GithubLogo,
  CraLogo,
  MuiLogo,
  D3Logo,
  FaLogo,
  MomentjsLogo,
  RsmLogo,
  ChartjsLogo,
} from '../images/logos';
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
  dialogTools: [
    {
      source: ReactLogo,
      title: 'React',
      url: 'https://reactjs.org/',
    },
    {
      source: CraLogo,
      title: 'Create React App',
      url: 'https://create-react-app.dev/',
    },
    {
      source: MuiLogo,
      title: 'Material-UI',
      url: 'https://material-ui.com/',
    },
    {
      source: D3Logo,
      title: 'D3.js',
      url: 'https://d3js.org/',
    },
    {
      source: RsmLogo,
      title: 'React Simple Maps',
      url: 'https://www.react-simple-maps.io/',
    },
    {
      source: ChartjsLogo,
      title: 'Chart.js',
      url: 'https://www.chartjs.org/',
    },
    {
      source: NodejsLogo,
      title: 'Node.js',
      url: 'https://nodejs.org/en/',
    },
    {
      source: YarnLogo,
      title: 'Yarn',
      url: 'https://yarnpkg.com/',
    },
    {
      source: GithubLogo,
      title: 'GitHub',
      url: 'https://github.com/',
    },
    {
      source: MomentjsLogo,
      title: 'Moment.js',
      url: 'https://momentjs.com/',
    },
    {
      source: FaLogo,
      title: 'Font Awesome',
      url: 'https://fontawesome.com/',
    },
  ],
};
