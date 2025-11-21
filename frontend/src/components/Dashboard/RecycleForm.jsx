import React, { useState, useContext } from 'react'
import { recycleAPI } from '../../services/api'
import { AuthContext } from '../../context/AuthContext'

export default function RecycleForm() {
  const { user, setUser, error, setError } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ qr_id: '', weight_kg: '' })
  const [result, setResult] = useState(null)

  const handleSubmit = async () => {
    setError('')

    if (!form.qr_id || !form.weight_kg) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      const response = await recycleAPI.submit(form.qr_id, parseFloat(form.weight_kg))
      setResult(response.data)
      setUser((prev) => ({
        ...prev,
        points: response.data.total_points,
        co2_saved: response.data.total_co2_saved,
        items_recycled: response.data.total_items_recycled,
      }))
      setForm({ qr_id: '', weight_kg: '' })
      setTimeout(() => setResult(null), 5000)
    } catch (err) {
      setError(err.response?.data?.detail || 'Submission failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Recycling</h2>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-lg mb-4">
          <p className="font-bold mb-2">Great job! 🎉</p>
          <p>+{result.points_earned} points earned</p>
          <p>+{result.co2_saved.toFixed(2)} kg CO₂ saved</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">QR Code ID</label>
          <input
            type="text"
            placeholder="Scan or enter QR code ID"
            value={form.qr_id}
            onChange={(e) => setForm({ ...form, qr_id: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Weight (kg)</label>
          <input
            type="number"
            step="0.1"
            placeholder="Enter weight in kilograms"
            value={form.weight_kg}
            onChange={(e) => setForm({ ...form, weight_kg: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            min="0.1"
            max="100"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Recycling'}
        </button>
      </div>
    </div>
  )
}
