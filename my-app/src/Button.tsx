type Props = {
  type: 'submit' | 'button';
  btnName: string;
};

export function Button({ type, btnName }: Props) {
  return <button type={type}>{btnName}</button>;
}
