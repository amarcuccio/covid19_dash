import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import CreditsDialog from '../components/CreditsDialog';
import styles from '../styles/NavbarStyles';
import VirusImage from '../images/main/virus.png';

class Navbar extends Component {
  state = {
    dialogOpen: false,
  };
  handleOpen = () => {
    this.setState({ dialogOpen: true });
  };
  handleClose = () => {
    this.setState({ dialogOpen: false });
  };
  render() {
    const { classes } = this.props;
    const { dialogOpen } = this.state;
    return (
      <div className={classes.root}>
        {dialogOpen && (
          <CreditsDialog open={dialogOpen} close={this.handleClose} />
        )}
        <AppBar position="static">
          <Container className={classes.container}>
            <Toolbar>
              <img src={VirusImage} alt="logo" className={classes.logo} />
              <Typography className={classes.title} variant="h6">
                <Box display={{ xs: 'none', sm: 'inline-block' }}>
                  <span className={classes.titleTextSm}>Coronavirus</span>
                </Box>
                <Box display={{ xs: 'inline-block', sm: 'none' }}>
                  <span className={classes.titleTextXs}>COVID-19</span>
                </Box>{' '}
                Tracker
              </Typography>
              <Button
                className={classes.button}
                startIcon={<InfoIcon className={classes.buttonIcon} />}
                color="inherit"
                onClick={this.handleOpen}
                size="large"
              >
                <Box display={{ xs: 'none', sm: 'inline-block' }}>
                  <span className={classes.buttonText}>About</span>
                </Box>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
