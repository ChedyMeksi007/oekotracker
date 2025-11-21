import { useContext, useEffect } from 'react'
import { AuthContext, AuthProvider } from './context/AuthContext'
import { authAPI } from './services/api'
import AuthPage from './components/Auth/AuthPage'
import Dashboard from './components/Dashboard/Dashboard'

function AppContent() {
  const { token, user, setUser } = useContext(AuthContext)

  useEffect(() => {
    if (token && !user) {
      authAPI
        .getCurrentUser()
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem('access_token')
          window.location.reload()
        })
    }
  }, [token, user, setUser])

  return token && user ? <Dashboard /> : <AuthPage />
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
