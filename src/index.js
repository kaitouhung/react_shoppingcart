import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import appReducers from './reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { compose } from 'redux'

// const store = createStore(
//   appReducers, 
//   applyMiddleware(thunk)
// )

const store = createStore(
  appReducers,
  compose(
    applyMiddleware(thunk),

  )

)

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
