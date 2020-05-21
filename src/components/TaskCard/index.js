import React from 'react';

import * as S from './styled';
import iconDefault from '../../assets/default.png';

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="Icone da tarefa" />
        <h3>Titulo da Tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>19/05/2020</strong>
        <span>00:30</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;
