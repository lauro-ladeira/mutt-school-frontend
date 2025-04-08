// src/components/AdminPageWrapper.tsx
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { BackButton, Container } from './styles'
import {
  Wrapper,
  Description,
  Title,
} from '../styles'

interface AdminPageWrapperProps {
  title: string
  backTo?: string
  children: React.ReactNode
}

export const AdminPageWrapper = ({
  title,
  backTo = '/admin',
  children,
}: AdminPageWrapperProps) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Container>
        <BackButton onClick={() => navigate(backTo)}>
          <ArrowLeft size={20} />
          <Description>Voltar</Description>
        </BackButton>

        <Title>{title}</Title>

        {children}
      </Container>
    </Wrapper>
  )
}
