import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
function Header() {
  return (
    <S.Container>
      <S.leftSide>
        <img src={logo} alt="logo" />
      </S.leftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="dividir" />
        <a href="#">NOVA TAREFA</a>
        <span className="dividir" />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir" />
        <a href="#" id="Notification">
          <img src={bell} alt="Notification" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
