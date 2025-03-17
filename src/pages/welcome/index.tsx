import {
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react'
import {
  ButtonContainer,
  Container,
  Description,
  ImageContainer,
  StyledButton,
  StyledImage,
  TextContainer,
  Title,
} from './styled'

import logo from '../../assets/main-logo.svg'

export const Welcome = () => {
  const { isSignedIn } = useUser()

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={logo} alt="Logo" />
      </ImageContainer>

      <ButtonContainer>
        <TextContainer>
          <Title>Bem-vindo</Title>
          <Description>
            Descubra uma forma especial de transformar
            vidas: adote um amigo ou ajude a reunir famílias
            registrando desaparecimentos. Juntos, podemos
            fazer a diferença para nossos peludos!
          </Description>
        </TextContainer>

        {!isSignedIn ? (
          <SignInButton mode="modal">
            <StyledButton>Entrar</StyledButton>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </ButtonContainer>
    </Container>
  )
}
