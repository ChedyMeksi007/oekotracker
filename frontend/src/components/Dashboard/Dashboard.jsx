import React, { useContext } from 'react'
import { TrendingUp, Home, Trash2 } from 'lucide-react'
import Navbar from '../Layout/Navbar'
import StatsCard from './StatsCard'
import RecycleForm from './RecycleForm'
import { AuthContext } from '../../context/AuthContext'

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatsCard
            title="Total Points"
            value={user?.points || 0}
            icon={TrendingUp}
            color="green"
          />
          <StatsCard
            title="CO₂ Saved (kg)"
            value={(user?.co2_saved || 0).toFixed(2)}
            icon={Trash2}
            color="blue"
          />
          <StatsCard
            title="Items Recycled"
            value={user?.items_recycled || 0}
            icon={Home}
            color="emerald"
          />
        </div>

        <RecycleForm />
      </div>
    </div>
  )
}
