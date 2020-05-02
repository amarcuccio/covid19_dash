import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const LinearGradient = (props) => {
  const { data } = props;
  const boxStyle = {
    width: '50%',
    margin: 'auto',
    display: 'flex',
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20,
  };
  return (
    <div>
      <div style={{ ...boxStyle, ...gradientStyle }}></div>
      <div style={boxStyle}>
        <span>
          <CountUp
            start={data.min}
            end={data.min}
            duration={0}
            separator=", "
          />
        </span>
        <span style={{ flex: 1 }}></span>
        <span>
          <CountUp
            start={data.max}
            end={data.max}
            duration={0}
            separator=", "
          />
        </span>
      </div>
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LinearGradient;
