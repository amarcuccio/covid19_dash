import * as React from 'react';
import { Component } from 'react';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VirusImage from '../images/virus.png';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <img src={VirusImage} alt="logo" className={classes.logo} />
              <Typography variant="h6">Coronavirus Dashboard</Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
