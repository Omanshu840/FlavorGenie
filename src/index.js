import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { Provider} from "react-redux";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import rootReducer, { initialState } from './redux/reducer';

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
