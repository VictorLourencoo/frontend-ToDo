import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;
`;
export const FilterArea = Styled.div`
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 margin-top: 30px;

 button{
    background: none;
    border: none;
   
 }

 
`;

export const Content = Styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

export const Title = Styled.div`
    width: 100%;
    border-bottom: 1px solid #20295f;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    h3{
        color:  #20295f;
        position: relative;
        top: 30px; 
        background: #FFF;
        padding: 0px 10px;
    }
`;
