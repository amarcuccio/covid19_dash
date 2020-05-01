import * as React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';
import SummaryPane from './components/SummaryPane';
import InteractiveMap from './components/InteractiveMap';
import CssBaseline from '@material-ui/core/CssBaseline';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFileMedical,
  faHeart,
  faSkullCrossbones,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFileMedical,
  faHeart,
  faSkullCrossbones,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faSync
);
export default class App extends Component {
  state = {
    summary: null,
    updated: null,
    loading: true,
  };
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const URL = 'https://api.covid19api.com/summary';
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({
        summary: data.Global,
        updated: moment(data.Date).format('MMMM Do YYYY [at] hh:mm:ss A'),
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { summary, loading, updated } = this.state;
    return (
      <div>
        <CssBaseline />
        <Navbar />
        <SummaryPane summary={summary} loading={loading} updated={updated} />
        <InteractiveMap summary={summary} loading={loading} />
      </div>
    );
  }
}
