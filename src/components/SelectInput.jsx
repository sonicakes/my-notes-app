const SelectInput = ({ value, name, label, options, required = false, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold pb-1" htmlFor={name}>{label}</label>
      <select
        value={value}
        required={required}
        name={name}
        options={options}
        onChange={onChange}
        className="border-gray-950 border rounded-lg py-1.5 px-2 w-full"
      >
        {options.map((option, index) => (
          <option key={index}>{option.icon && option.icon}{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
