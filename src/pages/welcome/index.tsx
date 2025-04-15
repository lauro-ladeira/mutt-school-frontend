import {
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import {
  IntroContainer,
  ImageContainer,
  StyledButton,
  StyledImage,
  TextContainer,
  AuthMessage,
  UserButtonContainer,
  AdminButton,
  Container,
} from './styled'
import logo from '../../assets/logo.svg'
import { Description, Title } from '../styles'

export const Welcome = () => {
  const navigate = useNavigate()
  const { isSignedIn, user } = useUser()

  const isAdmin = user?.publicMetadata?.role === 'admin'

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={logo} alt="Logo" />
      </ImageContainer>

      {isSignedIn && (
        <UserButtonContainer>
          {isAdmin && (
            <AdminButton onClick={() => navigate('/admin')}>
              Painel admin
            </AdminButton>
          )}
          <UserButton />
        </UserButtonContainer>
      )}

      <IntroContainer>
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
          <AuthMessage>Usuário autenticado</AuthMessage>
        )}
      </IntroContainer>
    </Container>
  )
}
