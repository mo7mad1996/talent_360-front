import { styled } from "@mui/material/styles";
import { TextField, Select } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/DateField";

export const CssTextField: any = styled(TextField)<{ className?: string }>({
  "& label.Mui-focused": {
    color: "#737791",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
      color: "#151D48",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

export const CssDateField: any = styled(DateField)<{ className?: string }>({
  "& label.Mui-focused": {
    color: "#737791",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
      color: "#151D48",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

export const CssSelectField: any = styled(Select)<{ className?: string }>({
  "& .MuiSelect-root": {
    border: "none",
  },
  "& .MuiSelect-select": {
    border: "none",
  },
  "& .Mui-focused": {
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
