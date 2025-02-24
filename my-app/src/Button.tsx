type Props = {
  type: 'submit' | 'button';
  btnName: string;
  onSave: () => void;
};

export function Button({ type, btnName, onSave }: Props) {
  return (
    <button onClick={onSave} type={type}>
      {btnName}
    </button>
  );
}
