import * as React from 'react';
import { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/CreditModalStyles';

class CreditModal extends Component {
  render() {
    const { classes, open, close } = this.props;
    const modalBody = (
      <div className={classes.paper}>
        <h2>About This Dashboard</h2>
        <p>
          A simple application developed to view COVID-19 related data at a
          glance. <br />
          The data is fetched from an API that is sourced from{' '}
          <Link
            target="_blank"
            rel="noopener"
            href="https://systems.jhu.edu/research/public-health/ncov/"
          >
            Johns Hopkins University Center for Systems Science and Engineering.
          </Link>
        </p>
        <h2>Toolset</h2>
        <ul>
          <li>
            <Link target="_blank" rel="noopener" href="https://reactjs.org/">
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
            <Link target="_blank" rel="noopener" href="https://momentjs.com/">
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
        <h2>Credits</h2>

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
            <Link target="_blank" rel="noopener" href="https://covid19api.com/">
              www.covid19api.com
            </Link>
            .
          </li>
        </ul>
        <h2>Code Repository</h2>
        <p>
          Check out the code for this app on{' '}
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/amarcuccio/covid19_dash"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    );
    return (
      <div>
        <Modal className={classes.modal} open={open} onClose={close}>
          {modalBody}
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(CreditModal);
