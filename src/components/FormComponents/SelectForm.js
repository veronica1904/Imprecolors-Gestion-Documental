import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller } from 'react-hook-form'

function SelectForm(props) {
    const { label, name, helperText, control, variant = "outlined", defaultValue="", options = [], ...otherProps } = props
    const labelId = `labelID-${name}`
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel id={labelId}>
                {label}
            </InputLabel>
            <Controller
                render={({ field  }) => (
                    <Select labelId={labelId} label={label} {...field} >
                        {options.map((item, index) => <MenuItem key={index} value={item.value}>{item.label}</MenuItem> )}
                    </Select>
                )}
                fullWidth
                control={control}
                defaultValue={defaultValue}
                name={name}
                {...otherProps}
            />
        </FormControl>
    );
}

export default SelectForm