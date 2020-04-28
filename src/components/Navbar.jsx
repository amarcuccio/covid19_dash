import * as React from 'react';
import { Component } from 'react';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreditDialog from '../components/CreditDialog';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import VirusImage from '../images/virus.png';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';

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
          <CreditDialog open={dialogOpen} close={this.handleClose} />
        )}
        <AppBar position="static">
          <Container>
            <Toolbar>
              <img src={VirusImage} alt="logo" className={classes.logo} />
              <Typography className={classes.title} variant="h6">
                <span className={classes.titleTextSm}>Coronavirus</span>
                <span className={classes.titleTextXs}>COVID-19</span> Dashboard
              </Typography>
              <Button
                startIcon={<InfoIcon className={classes.buttonIcon} />}
                color="inherit"
                onClick={this.handleOpen}
                size="large"
              >
                <span className={classes.buttonText}>About</span>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
