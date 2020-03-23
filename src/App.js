import React from 'react';
import styles from './App.module.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './MDsimple/Main'
import Navigate from './MDsimple/Navigate'
import TextField from './MDsimple/TextField'
import Switch from './MDsimple/Switch'
import Checkbox from './MDsimple/Checkbox'
import RadioButton from './MDsimple/RadioButton'

function App() {

  return (
    <Router>
      <div className={styles.App}>
        <header>
          <h1 className={styles.h1}>MD Simple</h1>
        </header>
        <div className={styles.container}>
          <Navigate />
          <Route exact path="/" component={Main} />
          <Route path="/textField" component={TextField} />
          <Route path="/switch" component={Switch} />
          <Route path="/checkbox" component={Checkbox} />
          <Route path="/radioButton" component={RadioButton} />
        </div>
      </div>
    </Router>

  );
}

export default App;


