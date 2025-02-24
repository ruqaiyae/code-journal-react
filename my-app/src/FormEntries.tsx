import { BtnNew } from './BtnNew';
import { useState, useEffect } from 'react';
import { type Entry, readEntries } from './data';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function FormEntries() {
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    async function work() {
      try {
        const read = await readEntries();
        setEntries(read);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    work();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <>
      <div data-view="entries" className="entries-wrapper">
        <div className="entries-heading column-full">
          <h1>Entries</h1>
          <BtnNew />
        </div>
        {/* adding logic for no entries on p */}
        {entries.length === 0 && (
          <p className="no-entries-text">No entries have been recorded</p>
        )}
        <ul className="entry-list">
          {entries.map((entry) => (
            <li key={entry.entryId}>
              <div className="row">
                <div className="column-half">
                  <div className="list-image-wrapper">
                    <img src={entry.photoUrl} />
                  </div>
                </div>
                <div className="column-half">
                  <h1>
                    {entry.title}
                    <Link to="/">
                      <FaPencilAlt size="20px" color="black" />
                    </Link>
                  </h1>
                  <p>{entry.notes}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <dialog>
        <p>
          <strong>Are you sure you want to delete this entry?</strong>
        </p>
        <div className="modal-actions">
          <button className="cancel-modal">CANCEL</button>
          <button className="confirm-modal">CONFIRM</button>
        </div>
      </dialog>
    </>
  );
}
