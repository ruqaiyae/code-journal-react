import { Image } from './Image';
import { Input } from './Input';
import { Notes } from './Notes';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { ImageInput } from './ImageInput';
import { addEntry, readEntry } from './data';
import { useNavigate, useParams } from 'react-router-dom';

export function Form() {
  const [title, setTitle] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState(
    'images/placeholder-image-square.jpg'
  );
  const [notes, setNotes] = useState('');
  const navSubmit = useNavigate();
  function handleSave() {
    addEntry({ title, notes, photoUrl });
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
    work();
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

  return (
    <>
      <div data-view="entry-form" className="entry-form-wrapper">
        <form id="entry-form">
          <div className="column-full">
            <h1 className="new-entry-header">New Entry</h1>
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
