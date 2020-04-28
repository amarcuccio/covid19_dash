import * as React from 'react';
import { Component } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SummaryCard from './SummaryCard';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SummaryPaneStyles';

class SummaryPane extends Component {
  state = {
    loading: true,
    summary: null,
    updated: null,
  };

  async componentDidMount() {
    const URL = 'https://api.covid19api.com/summary';
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({
      summary: data.Global,
      updated: moment(data.Date).format('MMMM Do YYYY [at] hh:mm:ss A'),
      loading: false,
    });
  }

  render() {
    const { loading, summary, updated } = this.state;
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <div>
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              {loading || !summary ? (
                <>
                  <SummaryCard title="" digit="" loading={loading} />
                  <SummaryCard title="" digit="" loading={loading} />
                  <SummaryCard title="" digit="" loading={loading} />
                </>
              ) : (
                <>
                  <SummaryCard
                    title={'Total Cases'}
                    digit={summary.TotalConfirmed}
                  />
                  <SummaryCard
                    title={'Total Deaths'}
                    digit={summary.TotalDeaths}
                  />
                  <SummaryCard
                    title={'Total Recovered'}
                    digit={summary.TotalRecovered}
                  />
                </>
              )}
            </Grid>
          </div>
          {loading || !summary
            ? 'Data is being loaded...'
            : `Data Reported: ${updated}`}
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SummaryPane);
