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
import Grid from '@material-ui/core/Grid';
import LinearGradient from '../components/LinearGradient';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ReactTooltip from 'react-tooltip';
import ReactCountryFlag from 'react-country-flag';
import { Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/InteractiveMapStyles';
import { scaleQuantile } from 'd3-scale';
import { schemeOranges } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { format } from 'd3-format';

const d3 = Object.assign(
  {},
  {
    format,
    scaleQuantile,
    schemeOranges,
    select,
  }
);

const geoUrl = require('../json/world.json');
const defaultColor = '#FFFFFF';
const projectionConfig = {
  scale: 145,
};

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

  var colorScale = d3
    .scaleQuantile()
    .domain([
      0,
      250,
      500,
      1000,
      1500,
      25000,
      5000,
      10000,
      25000,
      50000,
      100000,
      250000,
      500000,
      750000,
      1000000,
      1250000,
      1500000,
    ])
    .range(d3.schemeOranges[9]);

  return (
    <div>
      <Container>
        <Typography variant="h6">Interactive Map</Typography>
      </Container>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                <Sphere stroke="#212121" strokeWidth={0.25} fill="#81d4fa" />
                <Graticule stroke="#424242" strokeWidth={0.25} />
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
          </Grid>
        </Grid>

        <div className={classes.updated}>
          <Typography variant="caption">
            This choropleth map uses the{' '}
            <Link
              color="secondary"
              target="_blank"
              rel="noopener"
              href="https://observablehq.com/@d3/quantile-quantize-and-threshold-scales"
            >
              quantile scale
            </Link>{' '}
            method to separate the population.
          </Typography>
          <Divider />
        </div>
      </Container>
    </div>
  );
}

export default withStyles(styles)(InteractiveMap);
