type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
};

const Input = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col w-full space-y-4">
        <label htmlFor="Inputproduct">Select product</label>
        <input
          type="text"
          name="Inputproduct"
          value={props.value ? props.value : ""}
          onChange={(e) => props.onChange(e.target.value)}
          className="border-2"
        />
      </div>
      <button onClick={props.onClick} className="border-2 rounded-md p-4">
        Enter
      </button>
    </div>
  );
};

export default Input;
