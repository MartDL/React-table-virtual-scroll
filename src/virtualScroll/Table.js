import React from "react";
import Scroller from "./Scroller";
import json from '../data/people.json'
console.log('json:', json)

// define the views for the table. Leave as this for default.
const SETTINGS = {
  itemHeight: 37,
  amount: 12,
  tolerance: 5,
  minIndex: 0,
  maxIndex: 1000,
  startIndex: 1
};

// connects json data to the Scroller
const getData = (offset, limit) => {
  const data = [];
  const start = Math.max(SETTINGS.minIndex, offset);
  const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
  //console.log('start:', start)
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      data.push(json[i]);
    }
  }
  return data;
};

// Table column titles taken from data and pass to Scroller as props
const columnTitles = Object.keys(json[0])

// define table rows passed to Scroller as row prop
const tableRows = item => (
  <tr className="item" key={item.uuid}>
    <td>{item.uuid}</td>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.birthday}</td>
  </tr>
);

const Table = () => (
    <div style={{ margin: '50px'}}>
        <Scroller
          get={getData}
          settings={SETTINGS}
          columnTitles={columnTitles}
          tableRows={tableRows}
       />
  </div>
)

export default Table;