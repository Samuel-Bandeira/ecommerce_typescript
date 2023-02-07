interface OptionsI {
  options: string[];
  label: string;
}

const Select = ({ options, label }: OptionsI) => {
  return (
    <div className="space-x-2">
      <label>{label}</label>
      <select name="author" className="border border-gray-500">
        {options.map((op) => (
          <option value={op}>{op}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
