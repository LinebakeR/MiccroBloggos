import React from 'react'
import {Link, Route} from 'react-router-dom'
import Navbar from './navbar.js';
import Footer from './footer.js';

export default function DefaultLayout ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Navbar />
                <MatchedPage {...matchProps} />
                <Footer />
            </div>
        )} />
    )
};