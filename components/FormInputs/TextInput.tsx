import { Box, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { at } from "lodash";
import React from "react";

interface ITextInputProps {
  name: string;
  label: string;
  errorText?: string;
  fullWidth?: boolean;
  type?: string;
  error?: boolean;
  disabled?: boolean;
}

const TextInput = (props: ITextInputProps) => {
  const { errorText, type, label, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <Box sx={{margin: '10px 0'}}>
      <FormLabel sx={{ display: "block", fontSize: "16px", marginBottom: '4px' }}>{label}</FormLabel>
      <TextField
        type={type || "text"}
        error={meta?.touched && (meta?.error as unknown as boolean) && true}
        helperText={_renderHelperText()}
        size="small"
        {...field}
        {...rest}
      />
    </Box>
  );
};

export default TextInput;
