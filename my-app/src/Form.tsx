import { Image } from './Image';
import { Input } from './Input';
import { Notes } from './Notes';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { ImageInput } from './ImageInput';
import { addEntry, readEntry, removeEntry, updateEntry } from './data';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalDelete } from './ModalDelete';

export function Form() {
  const [title, setTitle] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState(
    'images/placeholder-image-square.jpg'
  );
  const [notes, setNotes] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navSubmit = useNavigate();

  async function handleSave() {
    if (id === undefined) {
      await addEntry({ title, notes, photoUrl });
    } else if (id !== undefined) {
      await updateEntry({ title, notes, photoUrl, entryId: Number(id) });
    }
    navSubmit('/');
  }

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { id } = useParams();

  useEffect(() => {
    async function work() {
      try {
        const read = await readEntry(Number(id));
        if (!read) throw new Error(`id ${id} does not exist`);
        setTitle(read?.title);
        setPhotoUrl(read?.photoUrl);
        setNotes(read?.notes);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (id !== undefined) {
      work();
    } else {
      setIsLoading(false);
    }
  }, [id]);

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

  function handleDelete() {
    setIsOpen(false);
    removeEntry(Number(id));
    navSubmit('/');
  }

  return (
    <>
      <div data-view="entry-form" className="entry-form-wrapper">
        <form id="entry-form">
          <div className="column-full">
            <h1 className="new-entry-header">
              {id === undefined ? 'New Entry' : 'Edit Entry'}
            </h1>
          </div>
          <div className="row">
            <Image imageUrl={photoUrl} />
            <div className="column-half">
              <Input
                onInput={(e) => setTitle(e)}
                label="Title"
                id="title"
                type="text"
                name="title"
                value={title}
              />
              <ImageInput
                label="Photo URL"
                id="photo-URL"
                type="url"
                name="photo-URL"
                value={
                  photoUrl === 'images/placeholder-image-square.jpg'
                    ? ''
                    : photoUrl
                }
                onImageInput={(value: string) => setPhotoUrl(value)}
              />
            </div>
            <div className="column-full">
              <Notes onNotesInput={(e) => setNotes(e)} value={notes} />
              <Button onSave={handleSave} type="submit" btnName="Save" />
              {id && (
                <button type="button" onClick={() => setIsOpen(true)}>
                  Delete
                </button>
              )}
              <ModalDelete
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

// / / App.tsx
// import { useState } from 'react';
// import { Modal } from './Modal';
// import './App.css';
// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   function handleClose() {
//     setIsOpen(false);
//   }
//   function handleDelete() {
//     alert('Deleted successfully');
//     setIsOpen(false);
//   }
//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>Delete Me!</button>
//       <Modal isOpen={isOpen} onClose={handleClose}>
//         <p>Are you sure you want to delete this?</p>
//         <button onClick={handleClose}>Cancel</button>
//         <button onClick={handleDelete}>Delete</button>
//       </Modal>
//     </>
//   );
// }
// export default App;
