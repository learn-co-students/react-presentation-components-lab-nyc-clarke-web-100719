import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function changeColor(e) {
  return e.target.style.color = 'red';
}


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={changeColor} />
  </div>,
  document.getElementById('root')
);