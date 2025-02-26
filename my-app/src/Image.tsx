import './App.css';
type Props = {
  imageUrl: string;
};

export function Image({ imageUrl }: Props) {
  return (
    <>
      <div className="photo-wrapper column-half">
        <img src={imageUrl} alt="Placeholder image" />
      </div>
    </>
  );
}
