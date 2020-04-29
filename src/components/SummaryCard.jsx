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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SummaryCard extends Component {
  render() {
    const { classes, title, data, loading, icon } = this.props;
    return (
      <Grid item xs={4} md={3}>
        <Card>
          <CardContent className={classes.root}>
            {loading ? (
              <Skeleton animation="wave" variant="rect" height={88} />
            ) : (
              <div className={classes.details}>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon={icon} size="3x" />
                </div>
                <div className={classes.content}>
                  <Typography variant="subtitle1">{title}</Typography>
                  <Typography variant="h5">
                    <CountUp start={0} end={data} duration={1} separator="," />
                  </Typography>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(SummaryCard);
