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
import ReactCountryFlag from 'react-country-flag';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/InteractiveMapStyles';

const geoUrl = require('../json/world.json');
const defaultColor = '#607D8B';
const projectionConfig = {
  scale: 140,
};

class InteractiveMap extends Component {
  state = {
    tooltipContent: '',
  };

  setTooltipContent = (geo, flag) => {
    this.setState({
      tooltipContent: `${geo}`,
      tooltipFlag: `${flag}`,
    });
  };

  onMouseEnter = (geo) => {
    return () => {
      this.setTooltipContent(
        `${geo.properties.NAME}`,
        `${geo.properties.ISO_A2}`
      );
    };
  };

  onMouseLeave = () => {
    this.setTooltipContent('', '');
  };

  render() {
    const { tooltipContent, tooltipFlag } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Container>
          <Typography variant="h6">Interactive Map</Typography>
        </Container>
        <Container>
          {tooltipContent !== '' && (
            <ReactTooltip>
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
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={defaultColor}
                        className={classes.geography}
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
        <div className={classes.mapScale}></div>
      </div>
    );
  }
}

export default withStyles(styles)(InteractiveMap);
