import * as React from 'react';
import { Component } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SummaryCard from './SummaryCard';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SummaryPaneStyles';
import { Divider } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@material-ui/core/Box';

class SummaryPane extends Component {
  render() {
    const { classes, summary, loading, updated } = this.props;

    return (
      <Container className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h6">Global Case Summary</Typography>
        </div>
        <div>
          <Grid
            className={classes.grid}
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
                <SummaryCard loading={loading} />
              </>
            ) : (
              <>
                <SummaryCard
                  title={'Confirmed'}
                  total={summary.Global.TotalConfirmed}
                  icon={'file-medical'}
                  color={'#2962FF'}
                  additional={summary.Global.NewConfirmed}
                />
                <SummaryCard
                  title={'Active'}
                  total={
                    summary.Global.TotalConfirmed -
                    summary.Global.TotalRecovered -
                    summary.Global.TotalDeaths
                  }
                  icon={'lungs-virus'}
                  color={'#FF6D00'}
                  additional={
                    summary.Global.NewConfirmed -
                    summary.Global.NewRecovered -
                    summary.Global.NewDeaths
                  }
                />
                <SummaryCard
                  title={'Recovered'}
                  total={summary.Global.TotalRecovered}
                  icon={'smile'}
                  color={'#00C853'}
                  additional={summary.Global.NewRecovered}
                />
                <SummaryCard
                  title={'Deaths'}
                  total={summary.Global.TotalDeaths}
                  icon={'skull-crossbones'}
                  color={'#D50000'}
                  additional={summary.Global.NewDeaths}
                />
              </>
            )}
          </Grid>
        </div>
        <div className={classes.updated}>
          <Typography variant="caption">
            {loading || !summary ? (
              <div>
                Refreshing data...{' '}
                <Box component="span" mx={1}>
                  <FontAwesomeIcon icon="sync" />
                </Box>
              </div>
            ) : (
              `Last update: ${updated} EDT`
            )}
          </Typography>
          {loading || !summary ? <LinearProgress /> : <Divider />}
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SummaryPane);
