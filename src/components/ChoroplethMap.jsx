import * as React from 'react';
import { Component } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  Line,
  ZoomableGroup,
} from 'react-simple-maps';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
  render() {
    return (
      <div>
        <Container>
          <Typography variant="h5">
            Interactive Map - Statistics by Country
          </Typography>
        </Container>
        <Container>
          <ComposableMap projectionConfig={projectionConfig} height={400}>
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
                      />
                    );
                  })
                }
              </Geographies>
              <Line
                coordinates={[
                  [-180, 0],
                  [-90, 0],
                  [0, 0],
                  [90, 0],
                  [180, 0],
                ]}
                stroke="#EB5569"
                strokeWidth={2}
              />
            </ZoomableGroup>
          </ComposableMap>
        </Container>
      </div>
    );
  }
}
