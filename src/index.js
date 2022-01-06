import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; //importerar App komponenten



//Render motod på vår ReactDom som vi importerat ovan. </App/> är ett html element, Html skriven i javascript kod kallas för jsx-kod.
ReactDOM.render(<App />,document.getElementById('root')); //Vi vill rendera vår <App></App> komponent in i elementet med id 'root' som vi kan hitta i index.html i public foldern.
