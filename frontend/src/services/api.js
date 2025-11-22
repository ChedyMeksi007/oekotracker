import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authAPI = {
  signup: (email, password, username) =>
    apiClient.post('/api/auth/signup', { email, password, username }),
  login: (email, password) =>
    apiClient.post('/api/auth/login', { email, password }),
  getCurrentUser: () =>
    apiClient.get('/api/auth/me'),
}

export const recycleAPI = {
  submit: (qr_id, weight_kg) =>
    apiClient.post('/api/recycle/submit', { qr_id, weight_kg }),
}

export default apiClient
