import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import mystyles from '../styles/mystyles.scss';

import Calendar from './calendar/Calendar';
import Contact from './contact/Contact';
import About from './about/About';
import Menu from './sidebar/Menu';
import PageNotFound from './PageNotFound';

const Root = () => {
  const menuColumn = {
    background: mystyles.lgrey,
    marginLeft: '-12px',
    marginTop: '-35px',
    paddingRight: '0px',
  };

  return (
    <>
        <section className="section">
          <div className="columns">
            <div className="column is-2" style={menuColumn}>
              <Menu />
            </div>
            <div className="column">
              <Switch>
                <Route path="/" exact component={Calendar} />
                <Route path="/calendar" exact component={Calendar} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </section>
    </>
  );
};

export default Root;
