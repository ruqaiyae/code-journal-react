type Props = {
  onNotesInput: (e: string) => void;
};

export function Notes({ onNotesInput }: Props) {
  return (
    <>
      <label>Notes</label>
      <textarea
        onChange={(e) => onNotesInput(e.target.value)}
        name="notes"
        id="notes"
        required></textarea>
    </>
  );
}
