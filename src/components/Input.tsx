interface InputI {
  label?: string;
  type: "password" | "text" | "file" | "number" | "date";
}
const Input = ({ label, type }: InputI) => {
  return (
    <div className="space-x-2">
      {label && <label>{label}</label>}
      <input
        className="border border-black px-2"
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
