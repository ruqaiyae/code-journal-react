import { Image } from './Image';
import { Input } from './Input';
import { Notes } from './Notes';
import { Button } from './Button';
import { useState } from 'react';
import { ImageInput } from './ImageInput';
import { addEntry } from './data';

export function Form() {
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState(
    'images/placeholder-image-square.jpg'
  );
  const [notes, setNotes] = useState('');

  // const [error, setError] = useState<unknown>();
  // const [isLoading, setIsLoading] = useState(true);
  // const [entry, setEntry] = useState<UnsavedEntry[]>([]);

  // useEffect(() => {
  //   async function work() {
  //     try {
  //       const read = await readEntries();
  //       setEntry(read);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   work();
  // }, []);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return (
  //     <div>
  //       Error! {error instanceof Error ? error.message : 'Unknown Error'}
  //     </div>
  //   );
  // }

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
              <Notes onNotesInput={(e) => setNotes(e)} />
              <Button
                onSave={() =>
                  addEntry({
                    title,
                    notes,
                    photoUrl,
                  })
                }
                type="submit"
                btnName="Save"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
