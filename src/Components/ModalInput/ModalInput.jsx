import TextField from "@material-ui/core/TextField";

export default function ModalInput({
  label,
  value,
  title,
  onChange,
  name,
  required,
  className,
  size,
}) {
  return (
    <TextField
      size={size}
      className={className}
      required={required}
      id="standard-required"
      onChange={onChange}
      label={label}
      value={value}
      title={title}
      name={name}
    />
  );
}
