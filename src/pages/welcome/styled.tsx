import styled from 'styled-components'

export const Container = styled.div`
  max-width: 410px;
  margin: 16px auto;
  height: 820px;
  overflow: hidden;

  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  border-radius: 8px;

  justify-content: space-between;
  padding-top: 32px; /* Espaço para a imagem */
`

export const ButtonContainer = styled.div`
  background-color: #e7aa4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40%;
  border-radius: 50px 50px 0 0;
  box-shadow: 0px -7px 50px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  justify-content: space-between;
  padding-block: 32px;
`

export const StyledButton = styled.button`
  background: #f8f0d4;
  width: 177px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #6c4a2e;
  color: #6c4a2e;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #6c4a2e;
    color: #fff;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%; /* Define um espaço proporcional para a imagem */
`

export const StyledImage = styled.img`
  width: 241px;
  height: 238px;
`

export const TextContainer = styled.div`
  width: 100%;
  padding: 16px;
  text-align: left; /* Alinhar o texto à esquerda */
  color: #413227;
`

export const Title = styled.h1`
  font-family: 'Akatab', sans-serif;
  font-weight: 800;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 8px; /* Espaço entre título e texto */
`

export const Description = styled.p`
  font-family: 'Akatab';
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.3px;
  line-height: 23px;
`

export const LogoContainer = styled.div``

export const Message = styled.p``

export const LoginButton = styled.button``

export const PresentationContainer = styled.div``
