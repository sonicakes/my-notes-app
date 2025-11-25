const InputText = ({ name, value, label, onChange, required, placeholder, type ="input" }) => {
  return (
    <div className="mb-2">
      <label className="block" htmlFor={name}>{label}</label>
      {type==="input" ? (
        <input
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border-green-800 border rounded-lg px-2 py-1"
        placeholder={placeholder}
      />
    ) : (
        <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border-green-800 border rounded-lg px-2 py-1"
        placeholder={placeholder}
        ></textarea>
      )}
      
    </div>
  );
};

export default InputText;
