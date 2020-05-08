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
    const {
      classes,
      title,
      total,
      additional,
      loading,
      icon,
      color,
    } = this.props;
    return (
      <Grid item xs={6} md={3}>
        <Card>
          <CardContent>
            {loading ? (
              <div className={classes.details}>
                <div className={classes.icon}>
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    height={86}
                    width={70}
                  />
                </div>
                <div className={classes.content}>
                  <Skeleton animation="wave" variant="text" width={100} />
                  <Skeleton animation="wave" variant="text" width={100} />
                  <Skeleton animation="wave" variant="text" width={100} />
                </div>
              </div>
            ) : (
              <div className={classes.details}>
                <div className={classes.icon}>
                  <FontAwesomeIcon icon={icon} size="4x" color={color} />
                </div>
                <div className={classes.content}>
                  <Typography variant="subtitle1">{title}</Typography>
                  <Typography variant="h6" gutterBottom>
                    <CountUp
                      start={0}
                      end={total}
                      duration={0.75}
                      separator=","
                    />
                  </Typography>
                  <Typography variant="caption">
                    <FontAwesomeIcon
                      className={classes.countIcon}
                      icon={
                        Math.sign(additional) === 1
                          ? 'arrow-alt-circle-up'
                          : 'arrow-alt-circle-down'
                      }
                      color={color}
                    />
                    <CountUp
                      start={0}
                      end={additional}
                      duration={0.75}
                      separator=","
                    />
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
