import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { Description, Title, Wrapper } from '../styles'
import {
  BackButton,
  Container,
  Menu,
  MenuButton,
} from './styles'

export const AdminPage = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Container>
        <BackButton onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          <Description>Voltar para o início</Description>
        </BackButton>

        <Title>Painel do administrador 👑</Title>

        <Menu>
          <MenuButton onClick={() => navigate('/admin/cadastrar')}>
            Cadastrar animal
          </MenuButton>
          <MenuButton onClick={() => navigate('/admin/listagem')}>
            Listagem de animais
          </MenuButton>
          <MenuButton onClick={() => navigate('/admin/gerenciar')}>
            Gerenciar animais
          </MenuButton>
        </Menu>
      </Container>
    </Wrapper>
  )
}
