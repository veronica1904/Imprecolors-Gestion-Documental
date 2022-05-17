import * as React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
function CheckboxForm(props) {
  const { control, name, label,required = false, ...otherProps } = props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        required={required}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <RadioGroup value={value}>
              <FormControlLabel
                onChange={onChange}
                control={<Checkbox color="default" />}
                label={label}
              />
            </RadioGroup>
          </FormControl>
        )}
        {...otherProps}
      />
    </div>
  );
}

export default CheckboxForm;
