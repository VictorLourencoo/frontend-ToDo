import React, { useState } from 'react';
import * as S from './styled';
//components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard/index';
function Home() {
  const [filterActived, setFilterActived] = useState();
  return (
    <S.Container>
      <Header />
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
          <h3>Tarefas</h3>
        </S.Title>
      </S.FilterArea>
      <S.Content>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default Home;
