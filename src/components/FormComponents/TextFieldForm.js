import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function TextFieldForm(props) {
    const { label, helperText, control, type = "text", required = false, ...otherProps } = props
    return (
        <Controller
            required={required}
            fullWidth
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                    required={required}
                    fullWidth
                    label={label}
                    onChange={onChange}
                    value={value}
                    helperText={helperText}
                    type={type}
                    {...otherProps}
                />
            )}
            {...otherProps}
        />
    );
}

export default TextFieldForm;
