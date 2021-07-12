import React from 'react';
import Placeholder from './placeholder.jpg';

interface IImgPreviewProps {
  imgPreview: Array<string> | undefined;
}

export function ImgPreview({ imgPreview }: IImgPreviewProps) {
  // eslint-disable-next-line react/destructuring-assignment
  const smallImg = imgPreview?.shift();
  // eslint-disable-next-line react/destructuring-assignment
  const bigImg = imgPreview?.pop();

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
