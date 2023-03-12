type InputPropsType = {
    placeholder: string;
    onChange: any;
    value: string;
};
   
function Input({placeholder, onChange, value}: InputPropsType) {
    return (
      <input value={value} onChange={onChange} className="p-3 border rounded-md" placeholder={placeholder}/>
    );
};
export default Input;