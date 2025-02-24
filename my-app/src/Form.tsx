import { Image } from './Image';
import { Input } from './Input';
import { Notes } from './Notes';
import { Button } from './Button';
import { useState } from 'react';

export function Form() {
  const [imageUrl, setImgeUrl] = useState(
    'images/placeholder-image-square.jpg'
  );

  return (
    <>
      <Image imageUrl={imageUrl} />
      {/* <Input label="Title" id="title" type="text" name="title"  /> */}
      <Input
        label="Photo URL"
        id="photo-URL"
        type="url"
        name="photo-URL"
        onchange={(value) => setImgeUrl(value)}
      />
      <Notes />
      <Button type="submit" btnName="Save" />
    </>
  );
}
