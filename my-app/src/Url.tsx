export function Url() {
  return (
    <>
      <div className="column-half">
        <label>
          Photo URL
          <input id="photo-url" type="url" name="photoUrl" required />
        </label>
      </div>
    </>
  );
}
