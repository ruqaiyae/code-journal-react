type Props = {
  label: string;
  id: string;
  type: string;
  name: string;
  onchange: (value: string) => void;
};

export function Input({ label, id, type, name, onchange }: Props) {
  return (
    <>
      <div className="column-half">
        <label>
          {label}
          <input
            id={id}
            type={type}
            name={name}
            onChange={(event) => onchange(event.target.value)}
            required
          />
        </label>
      </div>
    </>
  );
}
