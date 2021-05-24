import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './virtualScroll/Table'
import Table2 from './virtualScroll2/Table2'

ReactDOM.render(
  <React.StrictMode>
    <div>
     <Table />
    <Table2 />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


