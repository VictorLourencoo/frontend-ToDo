import React from 'react';
import * as S from './styled';
//components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
function Home() {
  return (
    <S.Container>
      <Header />
      <Footer />
    </S.Container>
  );
}

export default Home;
