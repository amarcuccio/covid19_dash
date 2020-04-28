import * as React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/CreditDialogStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class CreditDialog extends Component {
  render() {
    const { classes, open, close } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={close}
          aria-labelledby="customized-dialog-title"
        >
          <DialogTitle id="customized-dialog-title">
            About This Dashboard
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={close}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              This application was developed to view live COVID-19 related data
              at a glance.
            </Typography>
            <Typography gutterBottom>
              The figures are fetched from a public API that collects them from
              a credible source:{' '}
              <Link
                target="_blank"
                rel="noopener"
                href="https://systems.jhu.edu/research/public-health/ncov/"
              >
                Johns Hopkins University Center for Systems Science and
                Engineering.
              </Link>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Toolset
            </Typography>
            <Typography gutterBottom>
              <ul>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://reactjs.org/"
                  >
                    React
                  </Link>{' '}
                  (JavaScript library.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://create-react-app.dev/"
                  >
                    Create React App
                  </Link>{' '}
                  (React application development configuration.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://material-ui.com/"
                  >
                    Material-UI
                  </Link>{' '}
                  (User Interface & Component Library.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://momentjs.com/"
                  >
                    Moment.js
                  </Link>{' '}
                  (JavaScript parsing tool for date and time manipulation.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.react-simple-maps.io/"
                  >
                    React Simple Maps
                  </Link>{' '}
                  (SVG maps in React.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/d3/d3-geo"
                  >
                    d3-geo
                  </Link>{' '}
                  (Geographic projections.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/topojson/topojson"
                  >
                    topojson
                  </Link>{' '}
                  (GeoJSON extension for topological encoding.)
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://react-countup.now.sh/"
                  >
                    React CountUp
                  </Link>{' '}
                  (Fancy numeric rendering wrapper.)
                </li>
              </ul>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Credits
            </Typography>
            <Typography gutterBottom>
              <ul>
                <li>
                  Icon: made by{' '}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.flaticon.com/authors/freepik"
                  >
                    Freepik
                  </Link>{' '}
                  from{' '}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.flaticon.com/"
                  >
                    www.flaticon.com
                  </Link>
                  .
                </li>
                <li>
                  Data API: provided by{' '}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/ksredelinghuys"
                  >
                    Kyle Redelinghuys
                  </Link>{' '}
                  at{' '}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://covid19api.com/"
                  >
                    www.covid19api.com
                  </Link>
                  .
                </li>
              </ul>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Code Repository
            </Typography>
            <Typography gutterBottom>
              Check out the code for this app on{' '}
              <Link
                target="_blank"
                rel="noopener"
                href="https://github.com/amarcuccio/covid19_dash"
              >
                GitHub
              </Link>
              .
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreditDialog);
