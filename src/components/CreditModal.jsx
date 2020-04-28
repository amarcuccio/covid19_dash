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
        <h2>Technologies Used</h2>
        <ul>
          <li>React (UI library)</li>
          <li>Create-React-App (development configuration)</li>
          <li>Material-UI (UI & Component Library)</li>
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
        </ul>
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
