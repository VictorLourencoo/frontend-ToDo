import React from 'react';

import * as S from './styled';
import filter from '../../assets/filter.png';

function FilterCard(props) {
  return (
    <S.Container actived={props.actived}>
      <img src={filter} alt="filter" />
      <span>{props.title}</span>
    </S.Container>
  );
}
export default FilterCard;
