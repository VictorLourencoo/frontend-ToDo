import React, { useState, useEffect } from 'react';
import * as S from './Styled';

import api from '../../service/api';

//components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Icons from '../../utils/typeIcons';

import IconCalendar from '../../assets/calendar.png';
import IconClock from '../../assets/clock.png';

function Task() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();

  async function lateVerify() {
    await api
      .get(`/task/filter/late/11:11:11:11:11:11`)
      .then((response) => {
        setLateCount(response.data.length);
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  useEffect(() => {
    lateVerify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <Header lateCount={lateCount} />
      <S.Form>
        <S.TypeIcons>
          {
            //laço para mostrar os icones
            //pular index 0, condição se  index maior que 0
            Icons.map(
              (icon, index) =>
                index > 0 && (
                  <button type="button" onClick={() => setType(index)}>
                    <img
                      src={icon}
                      alt="Tipos de tarefa"
                      className={type && type != index && 'inative'}
                    />
                  </button>
                )
            )
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da Tarefa..."></input>
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da Tarefa..." />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input type="date"></input>
          <img src={IconCalendar} alt="Calendario" />
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input type="time"></input>
          <img src={IconClock} alt="Hora" />
        </S.Input>
        <S.Options>
          <div>
            <input type="checkbox" />
            <span>CONCLUÍDO</span>
          </div>
          <button type="button"> EXCLUIR</button>
        </S.Options>
        <S.Save>
          <button type="button">Salvar</button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Task;
