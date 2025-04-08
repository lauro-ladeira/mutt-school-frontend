import { Routes, Route } from 'react-router-dom'
import { Welcome } from './pages/welcome'
import { AdminRoute } from './routes/admin'
import { AdminPage } from './pages/admin-page'
import { CadastrarAnimal } from './pages/admin-page/cadastrar'
import { ListagemAnimais } from './pages/admin-page/listar'
import { GerenciarAnimais } from './pages/admin-page/gerenciar'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/cadastrar"
        element={
          <AdminRoute>
            <CadastrarAnimal />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/listagem"
        element={
          <AdminRoute>
            <ListagemAnimais />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/gerenciar"
        element={
          <AdminRoute>
            <GerenciarAnimais />
          </AdminRoute>
        }
      />
    </Routes>
  )
}

export default App
