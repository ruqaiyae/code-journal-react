type Props = {
  label: string;
  id: string;
  type: string;
  name: string;
  onInput: (e: string) => void;
  value: string;
};

export function Input({ label, id, type, name, onInput, value }: Props) {
  return (
    <>
      <label>
        {label}
        <input
          onChange={(e) => onInput(e.target.value)}
          id={id}
          type={type}
          name={name}
          value={value}
          required
        />
      </label>
    </>
  );
}
