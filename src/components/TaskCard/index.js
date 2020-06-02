import React, { useMemo } from 'react';
import { format } from 'date-fns';

import * as S from './styled';

import icons from '../../utils/typeIcons';

function TaskCard({ type, title, when }) {
  //converter when para formato JS, com date-fns
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <S.Container>
      <S.TopCard>
        <img src={icons[type]} alt="Icone da tarefa" />
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;
