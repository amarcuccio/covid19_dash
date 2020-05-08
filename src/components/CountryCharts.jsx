import React, { Component } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class CountryCharts extends Component {
  state = {
    loading: true,
    data: {},
  };

  componentDidMount() {
    this.getChartData();
  }

  getChartData = async () => {
    try {
      const URL = 'https://api.covid19api.com/total/dayone/country/canada';
      const response = await fetch(URL);
      var stats = await response.json();
      const linedata = {
        labels: stats.map((item) =>
          moment(new Date(item.Date)).format('MMM D YYYY')
        ),
        datasets: [
          {
            label: 'Confirmed',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#2962FF',
            borderColor: '#2962FF',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#2962FF',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#2962FF',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: stats.map((item) => item.Confirmed),
          },
          {
            label: 'Active',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#FF6D00',
            borderColor: '#FF6D00',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FF6D00',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#FF6D00',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: stats.map((item) => item.Active),
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#00C853',
            borderColor: '#00C853',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#00C853',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#00C853',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: stats.map((item) => item.Recovered),
          },
          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#D50000',
            borderColor: '#D50000',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#D50000',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#D50000',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: stats.map((item) => item.Deaths),
          },
        ],
      };

      this.setState({
        loading: false,
        data: linedata,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        {loading ? (
          'loading...'
        ) : (
          <div>
            <Container>
              <Typography variant="h6">Pandemic Timeline</Typography>
              <Typography variant="subtitle">
                Click/Tap a country in the globe above to view a day by day
                timeline below!
              </Typography>
            </Container>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Line data={data} />
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default CountryCharts;
