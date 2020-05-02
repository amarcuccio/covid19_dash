import * as React from 'react';
import { useState } from 'react';
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
import ReactCountryFlag from 'react-country-flag';
import LinearGradient from '../components/LinearGradient';
import { scaleQuantile } from 'd3-scale';
import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/InteractiveMapStyles';

const geoUrl = require('../json/world.json');
const defaultColor = '#E49DA0';
const projectionConfig = {
  scale: 140,
};
const colorRange = [
  '#EDB7BA',
  '#E8AAAD',
  '#E49DA0',
  '#E09092',
  '#DB8385',
  '#D77678',
  '#D26A6B',
  '#CE5D5E',
  '#C95051',
  '#C44344',
  '#C03636',
  '#BB2929',
  '#B71C1C',
];

const geographyStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    fill: '#263238',
    transition: 'all 750ms',
    outline: 'none',
    cursor: 'pointer',
  },
  pressed: {
    outline: 'none',
  },
};

function InteractiveMap(props) {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipFlag, setTooltipFlag] = useState('');
  const data = props.summary.Countries;
  const { classes } = props;

  const gradientData = {
    fromColor: colorRange[0],
    toColor: colorRange[colorRange.length - 1],
    min: 0,
    max: data.reduce(
      (max, item) => (item.TotalConfirmed > max ? item.TotalConfirmed : max),
      0
    ),
  };

  const onMouseEnter = (geo) => {
    return () => {
      setTooltipContent(`${geo.properties.NAME}`);
      setTooltipFlag(`${geo.properties.ISO_A2}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
    setTooltipFlag('');
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.TotalConfirmed))
    .range(colorRange);

  return (
    <div>
      <Container>
        <Typography variant="h6">Interactive Map</Typography>
      </Container>
      <Container>
        {tooltipContent !== '' && (
          <ReactTooltip place="bottom">
            <ReactCountryFlag
              countryCode={tooltipFlag}
              style={{
                display: 'flex !important',
                width: '2em',
                height: '2em',
                marginRight: '1em',
              }}
              svg
            />
            {tooltipContent}
          </ReactTooltip>
        )}
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
                  const current = data.find(
                    (s) => s.CountryCode === geo.properties.ISO_A2
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        current
                          ? colorScale(current.TotalConfirmed)
                          : defaultColor
                      }
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <LinearGradient data={gradientData} />
        <div className={classes.updated}>
          <Typography variant="caption">
            This map uses the quantile scale method of separating the
            population.
          </Typography>
          <Divider />
        </div>
      </Container>
    </div>
  );
}

export default withStyles(styles)(InteractiveMap);
