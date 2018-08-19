import css from './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';


console.log("Hello world!   ", process.env.VERSION);

ReactDOM.render(<Root></Root>, document.getElementById("root"));
