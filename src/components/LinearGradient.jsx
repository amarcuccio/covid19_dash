import React from 'react';
import { Container } from '@material-ui/core';
import CountUp from 'react-countup';
import ScaleImage from '../images/map/YlOrRd.png';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/LinearGradientStyles';

const LinearGradient = (props) => {
  const { data, classes } = props;

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.image}>
          <img src={ScaleImage} alt="Scale"></img>
        </div>
        <div className={classes.text}>
          <div className={classes.start}>
            <CountUp
              start={data.min}
              end={data.min}
              duration={0}
              separator=", "
            />
          </div>
          <div className={classes.end}>
            <CountUp
              start={data.max}
              end={data.max}
              duration={0}
              separator=", "
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default withStyles(styles)(LinearGradient);
