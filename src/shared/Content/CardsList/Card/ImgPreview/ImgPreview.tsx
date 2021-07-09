import React from 'react';
import Placeholder from './placeholder.jpg';

export function ImgPreview({ imgPreview }: any) {
  const smallImg = imgPreview?.images?.[0]?.resolutions?.[0]?.url;
  const bigImg = imgPreview?.images?.[0]?.resolutions?.[4]?.url;

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
