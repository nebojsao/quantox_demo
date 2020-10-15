import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export const DateSelector = () => {
    const [date, setDate] = useState(null);

    const onDateChange = (date) => {
        setDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disablePast
                allowKeyboardControl
                autoOk
                animateYearScrolling
                disableToolbar
                variant='inline'
                format='MM/yy'
                margin='normal'
                label='Expires On'
                placeholder={'MM/YY'}
                value={date}
                onChange={onDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change card expire on date'
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DateSelector;
