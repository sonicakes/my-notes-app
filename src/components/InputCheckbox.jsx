const InputCheckbox = ({
  name,
  value,
  label,
  onChange,
  required = false,
  defaultChecked = false,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={name} className="font-semibold mr-2">{label}</label>
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
