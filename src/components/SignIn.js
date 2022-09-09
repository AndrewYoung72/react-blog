import React from "react";
import { FormControl, InputLabel, Input, FormHelperText, Box, InputAdornment } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Password } from "@mui/icons-material";

export default function SignIn() {
  return (
    
      <Box>
      <FormControl>
      <Input    id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          } placeholder="Name..." />
      <Input
         id="input-with-icon-adornment"
         startAdornment={
           <InputAdornment position="start">
             <Password />
           </InputAdornment>
         } placeholder="Password..." />
        <FormHelperText id="my-helper-text">
          We'll never share your data.
        </FormHelperText>
      </FormControl>
      </Box>
    
  );
}
