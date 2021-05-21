import React from "react";
import Scroller from "./Scroller";
import "./style.css";
import json from '../data/photos.json'
console.log('json:', json)

// define the views for the table
const SETTINGS = {
  itemHeight: 25,
  amount: 15,
  tolerance: 5,
  minIndex: 0,
  maxIndex: json.length,
  startIndex: 1
};

// connects json data to the Scroller
const getData = (offset, limit) => {
  const data = [];
  const start = Math.max(SETTINGS.minIndex, offset);
  const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
  console.log('start:', start)
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
  <tr className="item" key={item.id}>
    <td>{item.albumId}</td>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.thumbnailUrl}</td>
    <td>{item.url}</td>
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