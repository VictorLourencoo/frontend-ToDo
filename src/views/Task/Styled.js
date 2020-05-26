import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = Styled.div`
  width: 50%; 
  margin-bottom: 70px;


`;

export const TypeIcons = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  .inative{
      opacity: 0.5;
      }    
  button{
      background: none;
      border: none;
    }
  img{
      width: 50px;
      height: 50px;
      margin: 10px;
      cursor: pointer;
    
    &:hover{
      opacity: 0.7;

    }
  }
`;

export const Input = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;

  span{
    color: #707070;
    margin: 5px 0px;
  }

  input{
    border: none;
    font-size: 16px;
    padding: 15px;
    border-bottom: 1px solid #EE6B26;
  }

  img{
    width: 20px;
    height: 20px;
    position: relative;
    left: 90%;
    bottom: 30px;
  }


`;
export const TextArea = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;

  span{ 
    color: #707070;
   margin: 5px 0px;
  }

  textarea{
    font-size: 16px;
    border: 1px solid #EE6B26;

  }
  

`;

export const Options = Styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;


  button{
    font-weight: bold;
    color: #20295f;
    border: none;
    background: none;  
    font-size: 18px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
  div{
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-weight: bold;
    font-size: 18px;
  }

  `;

export const Save = Styled.div`
    width: 100%;
    margin-top: 20px;
   button{
     width: 100%;
     cursor: pointer;
     background:#EE6B26;
     font-size: 20px;
    color: #FFF;
     font-weight: bold;
     padding: 20px;
     border-radius: 30px;


    &:hover{
      opacity: 0.7;
    }
  }
  `;
