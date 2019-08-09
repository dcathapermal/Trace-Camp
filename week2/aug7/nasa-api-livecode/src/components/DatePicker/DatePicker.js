import React from 'react';
import moment from 'moment';


const DatePicker = ({match, history}) => {
    console.log(match.params.date);
    const today = moment().format('YYYY-MM-DD');
    const minDate = moment('1995-06-16').format('YYYY-MM-DD');

    const dateHandler = (e) => {
        const date = e.target.value;
        history.push(`/apods/${date}`)
        console.log(date);
    }

    return (
        <div>
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="start"
                name="trip-start"
                value={today}
                min = {minDate}
                max={today}
                onChange = {dateHandler}
            />
        </div>
    );
}

export default DatePicker;