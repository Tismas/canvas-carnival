import { ErrorMessage, useField } from "formik";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const InputFormField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label
        className="block text-gray-200 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        className={`border-2 border-gray-800 rounded w-full py-3 px-4 bg-slate-800 text-gray-200 leading-tight focus:outline-none focus:border-primary-500 ${
          meta.error && meta.touched && "border-red-500"
        }`}
        id={props.name}
        {...field}
        {...props}
      />
      <div className="text-red-500">
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
};
