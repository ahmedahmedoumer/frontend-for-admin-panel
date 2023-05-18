import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

export default function Select(props) {
  const { fullWidth, label, items, id, name, size, sx,value } = props;
  return (
    <FormControl sx={sx} fullWidth={fullWidth}>
      <InputLabel id={`${id}-label`} size={size}>
        {label}
      </InputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        size={size}
        name={name}
        id={id}
        label={label}
        value={value}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
