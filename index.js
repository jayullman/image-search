import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// this will add the class .can-touch to the root element allowing
// to target touch screen devices
// from http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
window.onload = () => {
  document.addEventListener('touchstart', function addtouchclass(e) {
    document.documentElement.classList.add('can-touch');
    document.removeEventListener('touchstart', addtouchclass, false);
  }, false)
}

ReactDOM.render(<App />, document.getElementById('root'));