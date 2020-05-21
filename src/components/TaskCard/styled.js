import Styled from 'styled-components';

export const Container = Styled.div`
  width: 250px;
  height: 200px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 

    margin: 10px;
    
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
      opacity: 0.5;
    }
    
 
`;
/* cartões de tarefas */
export const TopCard = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`;

export const BottomCard = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong{
      color: #EE6B26;
      font-weight: bold;
    }
    span{
      color: #707070;
    }
`;
