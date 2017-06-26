import React from 'react';
import { render } from 'react-dom';

import './css/style.css';
import App from './components/App';

const Root = () => {
  return (
    <div><App/></div>
  )
}

render(<Root/>, document.querySelector('#main'));
