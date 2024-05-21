import React from "react";

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-neutral-300">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
    />
  </div>
);

export default FormField;
