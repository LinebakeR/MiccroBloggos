import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar.js';

export default function DefaultLayout({ component: MatchedPage, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <Navbar />
          <MatchedPage {...matchProps} />
        </div>
      )}
    />
  );
}
