import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";



export default function DatePickerForm({ 
    control,
    name,
    label, 
    required = false,
    arrayView =['day', "month"], 
    show= 'day',
    ...otherProps
}) {
 return (
        <Controller
            name={name} 
            control={control}
            required={required}
            render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label={label}
                        openTo={show}
                        views={arrayView}
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                        {...otherProps}
                    />
                </LocalizationProvider>
            )}
        />
    )
}