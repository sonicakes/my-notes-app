const SelectInput = ({ value, name, label, options, required = false, onChange }) => {
  return (
    <div className="mb-2">
      <label className="block" htmlFor={name}>{label}</label>
      <select
        value={value}
        required={required}
        name={name}
        options={options}
        onChange={onChange}
        className="border-green-800 border rounded-lg py-1 px-2"
      >
        {options.map((option, index) => (
          <option key={index}>{option.icon && option.icon}{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
