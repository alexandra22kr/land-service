import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import '../../css/all.css';
import './css/searchMenu.css';



function search(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            // ...state,
            action.value
        ];
    }
    return state;
}

const store = createStore(search);

store.subscribe(() => {  //подписаться на изменнение store
    console.log('store input', store.getState());
});

class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
        store.dispatch({ type: 'ADD_TRACK', value: event.target.value });
        console.log('input value', this.trackInput.value);
        this.props.onAddVal(this.trackInput.value);
    }

    render() {
        return (
            <input ref={(input) => { this.trackInput = input }} className="search-menu__input" type="search" onChange={this.handleChange.bind(this)} value={this.state.value} placeholder="Пошук" tabIndex="0"></input>
        );
    }
}

// export default InputSearch;

export default connect( 
    state => ({
        docs: state.value
    }),
    dispatch => ({
        onAddVal: (docValue) => {
            const doc = {
                id: Date.now().toString(),
                docValue
            }
            dispatch({ type: 'ADD_TRACK', value: doc })
        }
    })
)(InputSearch);