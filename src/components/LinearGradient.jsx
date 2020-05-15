import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import styles from '../styles/LinearGradientStyles';

class LinearGradient extends Component {
  render() {
    const { data, classes } = this.props;
    return (
      <Container>
        <div className={classes.root}>
          <div className={classes.gradient}></div>
          <div className={classes.text}>
            <span>
              <CountUp
                start={data.min}
                end={data.min}
                duration={0}
                separator=","
              />
            </span>
            <span>
              <CountUp
                start={data.max}
                end={data.max}
                duration={0}
                separator=","
              />
            </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(LinearGradient);
