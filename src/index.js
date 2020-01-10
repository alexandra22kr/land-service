import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import { create } from 'domain';
// import App from './App';

// const initialState = {
//   value: '',
//   val: 'ssss'
// }; 

const initialState = ['value'];

function docs(state = initialState, action) {
  if(action.type === 'ADD_TRACK') {
    return [
      ...state, 
      action.value
    ];
  }
  return state;
}

const store = createStore(docs, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState());

store.subscribe(() => {  //подписаться на изменнение store
  console.log(store.getState());
});



function App() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 