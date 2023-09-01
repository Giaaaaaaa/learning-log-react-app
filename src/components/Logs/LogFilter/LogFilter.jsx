import React from 'react'

const LogFilter = (props) => {
    const selectYear = (e) => {
        props.onYearChange(+e.target.value);
    }
    return (
        <div>Year:
            <select onChange={selectYear} value={props.year} defaultValue={0}>
                <option value={0}>All</option>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
            </select>
        </div>
    )
}

export default LogFilter