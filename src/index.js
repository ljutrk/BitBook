import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
=======
import "materialize-css/dist/css/materialize.min.css";
import 'material-design-icons/iconfont/material-icons.css';
import M from "materialize-css";

M.AutoInit();

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
>>>>>>> master
registerServiceWorker();
