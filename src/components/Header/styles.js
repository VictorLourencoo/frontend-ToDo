import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
  height: 70px;
  background: #20295f;
  border-bottom: 5px solid #EE6B26;

  display: flex;

`;

export const leftSide = Styled.div`
    width: 50%;
    height: 70px;
    align-items: center;
    padding: 10px;

    img{
      width: 100px;
      height: 40px;
    }


`;

export const RightSide = Styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a{
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0px 10px;


    &:hover{
    color:#EE6B26; 
  }
  

  }
  #Notification{
    &:hover{
        opacity: 0.5;
    }
    img{
      width:25px;
      height:30px;
    }
    span{
      background: #FFF;
      color: #EE6B26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;

     
      }
  
  }

  .dividir::after{
    content:"|";
     margin: 0 10px;
     color: #FFF
  }

  

`;
