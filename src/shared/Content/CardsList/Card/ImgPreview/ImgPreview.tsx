import React from 'react';

interface IImgPreviewProps {
  imgPreview: string,
}

export function ImgPreview({ imgPreview }: IImgPreviewProps) {
  return (
    <div className="card__preview preview">
      <img
        src={imgPreview}
        alt="preview"
        className="preview__img"
      />
    </div>
  );
}
