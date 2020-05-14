import React, { Component } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import ReactCountryFlag from 'react-country-flag';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { defaultConfig } from '../config';

class CountryCharts extends Component {
  state = {
    loading: true,
    data: {},
  };

  componentDidMount() {
    this.getChartData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.getChartData(this.props.country);
    }
  }

  getChartData = async () => {
    try {
      const URL = `${defaultConfig.chartsURL}${this.props.country}`;
      const response = await fetch(URL);
      const stats = await response.json();
      const chartBlue = '#2962FF';
      const chartOrange = '#FF6D00';
      const chartGreen = '#00C853';
      const chartRed = '#D50000';
      const linedata = {
        labels: stats.map((item) =>
          moment(new Date(item.Date)).utc().format('MMM D YYYY')
        ),
        datasets: [
          {
            ...defaultConfig.chartsDatasetGeneric,
            label: 'Confirmed',
            backgroundColor: chartBlue,
            borderColor: chartBlue,
            pointBorderColor: chartBlue,
            pointHoverBackgroundColor: chartBlue,
            data: stats.map((item) => item.Confirmed),
          },
          {
            ...defaultConfig.chartsDatasetGeneric,
            label: 'Active',
            backgroundColor: chartOrange,
            borderColor: chartOrange,
            pointBorderColor: chartOrange,
            pointHoverBackgroundColor: chartOrange,
            data: stats.map((item) => item.Active),
          },
          {
            ...defaultConfig.chartsDatasetGeneric,
            label: 'Recovered',
            backgroundColor: chartGreen,
            borderColor: chartGreen,
            pointBorderColor: chartGreen,
            pointHoverBackgroundColor: chartGreen,
            data: stats.map((item) => item.Recovered),
          },
          {
            ...defaultConfig.chartsDatasetGeneric,
            label: 'Deaths',
            backgroundColor: chartRed,
            borderColor: chartRed,
            pointBorderColor: chartRed,
            pointHoverBackgroundColor: chartRed,
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
    const options = defaultConfig.chartsOptions;
    return (
      <div>
        {loading ? (
          'loading...'
        ) : (
          <div>
            <Container>
              <Grid container>
                <Grid item xs={12} sm={11}>
                  <Typography variant="h6">
                    COVID-19 Cases Reported by Type ({this.props.name})
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <ReactCountryFlag
                    countryCode={this.props.flag}
                    style={{
                      width: '5em',
                      height: '5em',
                    }}
                    svg
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Line data={data} options={options} />
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
