import React, { useState, useEffect } from 'react';
//import MaskedInput from 'react-text-mask';
import * as S from './Styled';

import api from '../../service/api';
//import { format, parse } from 'date-fns';

//components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Icons from '../../utils/typeIcons';

import IconCalendar from '../../assets/calendar.png';
import IconClock from '../../assets/clock.png';

function Task() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState(1);

  //estados de tarefas
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [done, setDone] = useState(false);
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [macaddress, setMacAddress] = useState('11:11:11:11:11:11');

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

  async function Save() {
    console.log(title, data, hora);

    //const when = parse(data, 'yyyy-MM-ddHH:mm:ss.SSS', new Date());
    //let when = format(new Date(data), 'yyyy-MM-ddHH:mm:ss.SSS');
    //console.log(when);
    await api
      .post('/task', {
        type,
        macaddress,
        title,
        description,
        when: `${data}T${hora}:00.000`,
      })
      .then(() => {
        alert('Tarefada cadastrada');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    lateVerify();
  }, []);
  //(setWhen(format(new Date(date, hour), 'yyyy-MM-ddTHH:mm:ss.SSS')),

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
                      className={type && type !== index && 'inative'}
                    />
                  </button>
                )
            )
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da Tarefa..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhes da Tarefa..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            placeholder="Hora da Tarefa..."
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            //mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            guide={false}
            required
            minLength="10"
            // maxLength="10"
          />
          <img src={IconCalendar} alt="Calendario" />
        </S.Input>

        <S.Input>
          <span>Hora</span>

          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            mask={[/\d/, /\d/, ':', /\d/, /\d/]}
            guide={false}
            required
            minLength="5"
            maxLength="5"
          />
          <img src={IconClock} alt="Hora" />
        </S.Input>

        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={(e) => setDone(!done)}
            />
            <span>CONCLUÍDO</span>
          </div>
          <button type="button"> EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save()}>
            Salvar
          </button>
        </S.Save>
      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Task;
