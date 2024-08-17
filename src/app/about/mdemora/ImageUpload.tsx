'use client';

import {type ChangeEvent, useState} from 'react';

import {getImageUrl} from '@/lib/helpers';
import {uploadFile} from '@/lib/supabase/storage';

const ImageUpload = () => {
  const [source, setSource] = useState('');

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.files && e.target.files.length > 0) {
      try {
        const file = e.target.files[0];
        const data = await uploadFile(file);
        if ('fullPath' in data) {
          setSource(data.fullPath);
        } else {
          console.error('Upload failed:', data);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div>
      {source && <img src={getImageUrl(source)} alt="test" />}
      <input type="file" onChange={(e) => uploadImage(e)} />;
    </div>
  );
};

export default ImageUpload;
