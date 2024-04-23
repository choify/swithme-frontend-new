import { InputHTMLAttributes } from "react";

const TextInput = ({
  className,
  ...props
}: Partial<InputHTMLAttributes<HTMLInputElement>>) => {
  return (
    <input
      type="text"
      className={`w-[600px] h-[60px] px-2 py-1 border-black border rounded-lg ${className}`}
      {...props}
    />
  );
};

export default TextInput;
