import React from 'react';
import { EIcons, Icon } from '../../../../Icon';

interface IKarmaCounterProps {
  karma: number
}

export function KarmaCounter({ karma }: IKarmaCounterProps) {
  return (
    <div className="card__karma-counter karma-counter">
      <button className="karma-counter__up" type="button">
        <Icon name={EIcons.karmaUp} size={20} />
      </button>
      <span className="karma-counter__value">{karma}</span>
      <button className="karma-counter__down" type="button">
        <Icon name={EIcons.karmaDown} size={20} />
      </button>
    </div>
  );
}
