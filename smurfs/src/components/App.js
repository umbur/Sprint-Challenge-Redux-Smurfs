import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

import Smurfs from './Smurfs';
import './App.css';


class App extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        const {smurfs, fetchingSmurfs, error} = this.props;

        if (fetchingSmurfs) {
            return <h2 className="App">Loading Smurfs...</h2>;
        } else if (error) {
            return <h2 className="App">404 Smurfs Not Found</h2>;
        } else {
            return (
                <div className="App">
                    <h1>SMURFS! 2.0 W/ Redux</h1>
                    <Smurfs smurfs={smurfs}/>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    console.log('State from App', state)
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    };
};

export default connect(mapStateToProps, {getSmurfs})(App);