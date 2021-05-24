import React from 'react'
import styled from 'styled-components'
import json from '../data/people.json'


const Table2 = () => {
    const columnTitles = Object.keys(json[0])
    console.log(json)
    return (
        <div>
            <StyledSection>
                <StyledContainer>
                    <StyledTable>
                    <thead>
                        <StyledHeaderRow>
                            {columnTitles.map(item => (
                                <th key={item}><div>{item}</div></th>
                            ))}
                        </StyledHeaderRow>
                    </thead>
                    <tbody>
                    {json.map(item => (
                        <tr key={item.uuid}>
                            <td>{item.uuid}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.birthday}</td>
                        </tr>))
                        }
                    </tbody>
                    </StyledTable>
                </StyledContainer>
            </StyledSection>
        </div>
    )
}

export default Table2;

const StyledSection = styled.section`
    position: relative;
    border: 1px solid #000;
    padding-top: 37px;
    background: #615f5f;
    margin: 50px;
    // width: 1200px;
`

const StyledContainer = styled.div`
    overflow-y: auto;
    height: 400px;
`

const StyledTable = styled.table`
    border-spacing: 0;
    width: 100%;
       td, th{
            border-bottom: 1px solid #eee;
            background: #ddd;
            color: #000;
            padding: 10px 25px;
        }
        th {
            height: 0;
            line-height: 0;
            padding-top: 0;
            padding-bottom: 0;
            color: transparent;
            border: none;
            white-space: nowrap;
        }
        td+td {
            border-left: 1px solid #eee;
          }
`
const StyledHeaderRow = styled.tr`
    div {
    position: absolute;
    background: transparent;
    color: #fff;
    padding: 9px 25px;
    top: 0;
    margin-left: -25px;
    line-height: normal;
    border-left: 1px solid white;
    }
`
