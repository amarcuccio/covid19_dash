import * as React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

function ChoroplethMap() {
  const geoUrl = require('../json/world.json');
  const projectionConfig = {
    scale: 100,
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
  return (
    <div>
      <Container>
        <Paper>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={projectionConfig}
          >
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
          </ComposableMap>
        </Paper>
      </Container>
    </div>
  );
}

export default ChoroplethMap;
