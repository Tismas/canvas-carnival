import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  autocomplete: HTMLInputAutoCompleteAttribute;
  setValue: (value: string) => void;
}

export const Input = ({
  id,
  label,
  type,
  placeholder,
  autocomplete,
  value,
  setValue,
}: Props) => {
  return (
    <div>
      <label
        className="block text-gray-200 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="border-2 border-gray-800 rounded w-full py-3 px-4 bg-slate-800 text-gray-200 leading-tight focus:outline-none focus:border-primary-500"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autocomplete}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
