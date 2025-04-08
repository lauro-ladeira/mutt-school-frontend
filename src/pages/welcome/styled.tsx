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
  position: relative;
`

export const IntroContainer = styled.div`
  background-color: var(--orange);
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
  border: 1px solid var(--brown);
  color: var(--brown);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: var(--brown);
    color: var(--text-light);
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
  color: var(--text-dark);
`

export const LogoContainer = styled.div``

export const Message = styled.p``

export const LoginButton = styled.button``

export const PresentationContainer = styled.div``

export const UserButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
`

export const AuthMessage = styled.p`
  font-family: 'Akatab', sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: var(--text-dark);
`

export const AdminButton = styled.button`
  background: var(--brown);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background: var(--brown-dark);
  }
`
