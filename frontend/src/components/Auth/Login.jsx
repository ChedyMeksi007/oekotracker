import React, { useState, useContext } from 'react'
import { authAPI } from '../../services/api'
import { AuthContext } from '../../context/AuthContext'

export default function Login({ onSwitchToSignup }) {
  const { login, error, setError } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = async () => {
    setError('')

    if (!form.email || !form.password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      const response = await authAPI.login(form.email, form.password)
      login(response.data.user, response.data.access_token)
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <button
        onClick={onSwitchToSignup}
        className="w-full text-green-600 font-semibold py-2 hover:text-green-700 transition"
      >
        Create Account
      </button>
    </div>
  )
}
