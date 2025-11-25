const InputCheckbox = ({
  name,
  value,
  label,
  onChange,
  required = false,
  defaultChecked = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        defaultChecked={defaultChecked}
      />
    </div>
  );
};

export default InputCheckbox;
