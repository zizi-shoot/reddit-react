import React from 'react';
import Placeholder from './placeholder.jpg';

interface IImgPreviewProps {
  imgPreview: Array<string> | undefined;
}

export function ImgPreview({ imgPreview }: IImgPreviewProps) {
  const smallImg = imgPreview && [...imgPreview].shift();
  const bigImg = imgPreview && [...imgPreview].pop();

  return (
    <div className="card__preview preview">
      {
        imgPreview
          ? (
            <picture className="preview__img">
              <source srcSet={bigImg || smallImg} />
              <source media="(min-width: 1024px)" srcSet={smallImg} />
              <img src={bigImg} alt="preview" />
            </picture>
          )
          : (
            <img
              src={Placeholder}
              alt="preview"
              className="preview__img"
            />
          )
      }
    </div>
  );
}
