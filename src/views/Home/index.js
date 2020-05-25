import React, { useState, useEffect } from 'react';
import * as S from './styled';

import api from '../../service/api';

//components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard/index';
function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();
  async function loadTask() {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        setTasks(response.data);
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

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

  function Notification() {
    setFilterActived('late');
  }

  useEffect(() => {
    loadTask();
    lateVerify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterActived]);

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification} />
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived('all')}>
          <FilterCard title="Todos" actived={filterActived === 'all'} />
        </button>

        <button type="button" onClick={() => setFilterActived('today')}>
          <FilterCard title="Hoje" actived={filterActived === 'today'} />
        </button>
        <button type="button" onClick={() => setFilterActived('week')}>
          <FilterCard title="Semana" actived={filterActived === 'week'} />
        </button>
        <button type="button" onClick={() => setFilterActived('month')}>
          <FilterCard title="Mês" actived={filterActived === 'month'} />
        </button>
        <button type="button" onClick={() => setFilterActived('year')}>
          <FilterCard title="Ano" actived={filterActived === 'year'} />
        </button>
        <S.Title>
          <h3>{filterActived === 'late' ? 'Tarefas Atrasadas' : 'Tarefas'}</h3>
        </S.Title>
      </S.FilterArea>
      <S.Content>
        {tasks.map((t) => (
          <TaskCard type={t.type} title={t.title} when={t.when} />
        ))}
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default Home;
