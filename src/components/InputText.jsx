const InputText = ({ name, value, label, onChange, required, placeholder, type ="input" }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold pb-1" htmlFor={name}>{label}</label>
      {type==="input" ? (
        <input
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border-gray-950 border rounded-lg px-2 py-1.5 w-full"
        placeholder={placeholder}
      />
    ) : (
        <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border-gray-950 border rounded-lg px-2 py-1.5 w-full"
        placeholder={placeholder}
        ></textarea>
      )}
      
    </div>
  );
};

export default InputText;
