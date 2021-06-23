import React from 'react';
import img from './img-preview.jpg';

export function ImgPreview() {
  return (
    <div className="card__preview preview">
      <img
        src={img}
        alt="preview"
        className="preview__img"
      />
    </div>
  );
}
