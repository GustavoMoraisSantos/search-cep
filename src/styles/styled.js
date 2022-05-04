import styled , {keyframes} from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#121212, #212b46);
`;

const flipTitle = keyframes`
    from{
      transform: rotateX(90deg);
    }
    to{
      transform: rotateX(0deg);
    }
  `

export const Title = styled.h2`
    font-size: 85px;
    color: white;
    animation: ${flipTitle} 2s;
    @media (max-width: 730px){
          font-size: 60px;
    }
    @media (max-width: 520px){
          font-size: 40px;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    background-color: rgba(255,255,255, 0.2);
    padding: 15px;
    margin: 34px 0;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0, 0.5);
    & input{
        background-color: transparent;
        border: 0;
        font-size: 20px;
        color: white;
        outline: none;
        margin-right: 8px;
    }
    &input::placeholder{
        color: white;
    }
`;

export const ButtonSearch = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;
    & ButtonSearch:hover{
        transform: scale(1.2);
      }
`;

export const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 500px;
    border-radius: 8px;
    & h2{
        margin: 16px 0;
        font-size: 39px;
        @media (max-width: 730px){
            font-size: 28px;
        }
        @media (max-width: 520px){
            font-size: 20px;
        }
      }
    & span{
        margin-bottom: 16px;
        font-weight: bold;
        color:grey;
      }

    @media (max-width: 730px){
        width: 80%;
        min-height: 250px;
    }
`;

