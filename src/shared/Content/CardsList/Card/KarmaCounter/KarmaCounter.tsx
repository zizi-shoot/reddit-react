import React from 'react';

export const KarmaCounter = () => (
  <div className="card__karma-counter karma-counter">
    <button className="karma-counter__up" type="button">
      <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
      </svg>
    </button>
    <span className="karma-counter__value">234</span>
    <button className="karma-counter__down" type="button">
      <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4" />
      </svg>
    </button>
  </div>
);
