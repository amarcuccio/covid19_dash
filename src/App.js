import * as React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';
import SummaryPane from './components/SummaryPane';
import InteractiveMap from './components/InteractiveMap';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFileMedical,
  faHeart,
  faSkullCrossbones,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFileMedical,
  faHeart,
  faSkullCrossbones,
  faArrowAltCircleUp,
  faArrowAltCircleDown
);
export default class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Navbar />
        <SummaryPane />
        <InteractiveMap />
      </div>
    );
  }
}
