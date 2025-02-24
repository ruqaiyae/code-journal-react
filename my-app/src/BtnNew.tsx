import { Link } from 'react-router-dom';

export function BtnNew() {
  return (
    <Link to="/">
      <button type="button" className="new-entry-button" data-view="entry-form">
        New
      </button>
    </Link>
  );
}
