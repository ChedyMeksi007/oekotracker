import React, { useState, useContext } from 'react'
import { Trash2 } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'
import Login from './Login'
import Signup from './Signup'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const { error } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
              <Trash2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">ÖkoTracker</h1>
            <p className="text-gray-600 mt-2">Track your recycling impact</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {isLogin ? (
            <Login onSwitchToSignup={() => setIsLogin(false)} />
          ) : (
            <Signup onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  )
}
