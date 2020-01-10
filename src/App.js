import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    render() {
        console.log('app', this.props.testStore);
        return (
            <div>

            </div>
        )
    }
}

export default connect( 
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);