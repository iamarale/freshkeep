interface FieldTypes {
  labelName: string;
  inputId: string;
  inputType: 'text' | 'number';
  value: string;
  setChange: (newValue: string | number) => void;
  children: string | number;
}
export default function FormFields({
  labelName,
  inputId,
  inputType,
  value,
  setChange,
}: FieldTypes) {
  return (
    <div className="`flex-col flex">
      <label htmlFor={inputId}>{labelName}</label>
      <input
        className="rounded border-[1px] bg-neutral-700 px-2 py-1 text-neutral-200"
        id={inputId}
        type={inputType}
        value={value}
        onChange={e => setChange(e.target.value)}
        required
      />
    </div>
  );
}
