import Styled from 'styled-components';

export const Container = Styled.div`
  width: 260px;
  height: 60px;
  /**caso o cartão esteja ativo muda o fundo para laranja */
  background: ${(props) => (props.actived ? '#EE6B26' : '#20295f')};
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;

  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img{
    width: 25px;
    height: 25px;

  }
  span{
    color: #FFF;
    font-weight: bold; 
    align-self: flex-end;
    font-size: 18px;

  }&:hover{
    background: #EE6B26;
  }


  
`;
