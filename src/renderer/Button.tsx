import React from 'react';

export default function ButtonForm({
  onGenerateImage,
}: {
  onGenerateImage: () => void;
}) {
  return (
    <button type="button" onClick={onGenerateImage}>
      Upload!
    </button>
  );
}
