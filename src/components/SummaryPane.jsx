import * as React from 'react';
import { Component } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SummaryCard from './SummaryCard';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
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
        <div className={classes.title}>
          <Typography variant="h6">World Case Summary</Typography>
          <Typography
            className={classes.updated}
            variant="caption"
            gutterBottom
          >
            Last update: {updated} EDT
          </Typography>
        </div>
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            {loading || !summary ? (
              <>
                <SummaryCard loading={loading} />
                <SummaryCard loading={loading} />
                <SummaryCard loading={loading} />
              </>
            ) : (
              <>
                <SummaryCard
                  title={'Cases'}
                  total={summary.TotalConfirmed}
                  icon={'file-medical'}
                  color={'#2962FF'}
                  additional={summary.NewConfirmed}
                />
                <SummaryCard
                  title={'Recovered'}
                  total={summary.TotalRecovered}
                  icon={'heart'}
                  color={'#00C853'}
                  additional={summary.NewRecovered}
                />
                <SummaryCard
                  title={'Deaths'}
                  total={summary.TotalDeaths}
                  icon={'skull-crossbones'}
                  color={'#D50000'}
                  additional={summary.NewDeaths}
                />
              </>
            )}
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SummaryPane);
