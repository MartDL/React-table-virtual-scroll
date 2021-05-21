import React, { useState, useEffect} from "react";
import styled from 'styled-components'

const Scroller = ({tableRows, columnTitles, get, settings}) => {
  const [topPaddingHeight, setTopPaddingHeight] = useState()
  const [bottomPaddingHeight, setBottomPaddingHeight] = useState()
  const [data, setData] = useState([])
  const viewportElement = React.createRef();
  const viewportHeight = settings.amount * settings.itemHeight;
  const totalHeight = (settings.maxIndex - settings.minIndex + 1) * settings.itemHeight;
  const toleranceHeight = settings.tolerance * settings.itemHeight;
  const bufferedItems = settings.amount + 2 * settings.tolerance;
  const initialPosition = topPaddingHeight + toleranceHeight;

  useEffect(() => {
   viewportElement.current.scrollTop = initialPosition
    if (!initialPosition) {
      runScroller({ target: { scrollTop: 0 } });
    }
  }, [])

  const runScroller = ({ target: { scrollTop } }) => {
    const index = settings.minIndex + Math.floor((scrollTop - toleranceHeight) / settings.itemHeight);
    setData(get(index, bufferedItems))
    setTopPaddingHeight(Math.max((index - settings.minIndex) * settings.itemHeight, 0))
    setBottomPaddingHeight(Math.max(totalHeight - topPaddingHeight - data.length * settings.itemHeight,0))
  }

  return (
    <>
      <StyledTitlesContainer>
        {columnTitles.map(item => (
        <div key={item}>{item}</div>
        ))}
      </StyledTitlesContainer>
      <StyledTable
        ref={viewportElement}
        onScroll={runScroller}
        style={{ height: viewportHeight }}>
        <div style={{ height: topPaddingHeight }} />
          <table>
            <tbody>
              {data.map(tableRows)}
            </tbody>
          </table>
        <div style={{ height: bottomPaddingHeight }} />
      </StyledTable>
    </>
  );
}

export default Scroller;

const StyledTitlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  height: 20px;
  background-color: #C8C8C8;
`

const StyledTable = styled.div`
  width: 1200px;
  overflow-y: auto;
  border: 1px solid black;

`


