import * as React from 'react';
import { Component } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from 'react-simple-maps';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ReactTooltip from 'react-tooltip';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/InteractiveMapStyles';

const geoUrl = require('../json/world.json');
const projectionConfig = {
  scale: 140,
};
const defaultColor = '#1b5e20';
const geographyStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    fill: '#b71c1c',
    transition: 'all 750ms',
    outline: 'none',
    cursor: 'pointer',
  },
  pressed: {
    outline: 'none',
  },
};
class InteractiveMap extends Component {
  state = {
    tooltipContent: '',
  };

  setTooltipContent = (geo) => {
    this.setState({
      tooltipContent: `${geo}`,
    });
  };

  onMouseEnter = (geo) => {
    return () => {
      this.setTooltipContent(`${geo.properties.NAME}`);
    };
  };

  onMouseLeave = () => {
    this.setTooltipContent('');
  };

  render() {
    const { classes } = this.props;
    const { tooltipContent } = this.state;
    return (
      <div>
        <Container>
          <Typography variant="h6">Interactive Map</Typography>
        </Container>
        <Container>
          <ReactTooltip className={classes.statsTooltip}>
            {tooltipContent}
          </ReactTooltip>
          <ComposableMap
            projectionConfig={projectionConfig}
            height={450}
            data-tip=""
          >
            <ZoomableGroup>
              <Graticule stroke="#BDBDBD" strokeWidth={0.5} />
              <Sphere stroke="#BDBDBD" strokeWidth={0.5} />
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={defaultColor}
                        style={geographyStyle}
                        onMouseEnter={this.onMouseEnter(geo)}
                        onMouseLeave={this.onMouseLeave}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(InteractiveMap);
