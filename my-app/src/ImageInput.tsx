type Props = {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  onImageInput: (e: string) => void;
};

export function ImageInput({
  label,
  id,
  type,
  name,
  value,
  onImageInput,
}: Props) {
  return (
    <>
      <div className="column-half">
        <label>
          {label}
          <input
            onChange={(e) => onImageInput(e.target.value)}
            value={value}
            id={id}
            type={type}
            name={name}
            required
          />
        </label>
      </div>
    </>
  );
}
