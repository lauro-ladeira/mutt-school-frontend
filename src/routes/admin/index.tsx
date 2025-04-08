import { useUser } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

interface AdminRouteProps {
  children: React.ReactNode
}

export const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user, isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return <div>Carregando...</div>

  if (!isSignedIn) return <Navigate to="/" />

  const role = user.publicMetadata.role

  //console.log('user: ', user)

  if (role !== 'admin') {
    return <div>Você não tem permissão para acessar esta página.</div>
  }

  return <>{children}</>
}
