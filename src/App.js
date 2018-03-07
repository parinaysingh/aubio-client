import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './components/pages/Dashboard';


const App = ({ location }) => (
    <div>
        <Route location={location} path="/" exact component={Dashboard} />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
