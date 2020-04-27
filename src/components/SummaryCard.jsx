import * as React from 'react';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SummaryCardStyles';

class SummaryCard extends Component {
  render() {
    const { classes } = this.props;
    const { title, digit } = this.props;
    return (
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent className={classes.CardContent}>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="h3" component="p">
              <CountUp start={0} end={digit} duration={1} separator="," />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(SummaryCard);
