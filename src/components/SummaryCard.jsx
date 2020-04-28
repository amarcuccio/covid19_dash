import * as React from 'react';
import { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SummaryCardStyles';

class SummaryCard extends Component {
  render() {
    const { classes, title, data, loading } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent className={classes.CardContent}>
            {loading ? (
              <Skeleton animation="wave" variant="rect" height={88} />
            ) : (
              <>
                <Typography variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="h3" component="p">
                  <CountUp start={0} end={data} duration={1} separator="," />
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(SummaryCard);
