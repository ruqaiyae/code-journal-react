type Props = {
  onNotesInput: (e: string) => void;
  value: string;
};

export function Notes({ onNotesInput, value }: Props) {
  return (
    <>
      <label>Notes</label>
      <textarea
        onChange={(e) => onNotesInput(e.target.value)}
        name="notes"
        id="notes"
        value={value}
        required></textarea>
    </>
  );
}
