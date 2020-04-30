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

const geoUrl = require('../json/world.json');
const projectionConfig = {
  scale: 140,
};
const defaultColor = '#757575';
const geographyStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    fill: '#212121',
    transition: 'all 750ms',
    outline: 'none',
    cursor: 'pointer',
  },
  pressed: {
    outline: 'none',
  },
};
export default class ChoroplethMap extends Component {
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
    return (
      <div>
        <Container>
          <Typography variant="h6">Interactive Map</Typography>
        </Container>
        <Container>
          <ReactTooltip>{this.state.tooltipContent}</ReactTooltip>
          <ComposableMap
            projectionConfig={projectionConfig}
            height={400}
            data-tip=""
          >
            <ZoomableGroup zoom={1}>
              <Graticule stroke="#DDDDDD" strokeWidth={0.5} />
              <Sphere stroke="#DDD" strokeWidth={0.5} />
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
