export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Green Germany Rewards
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Recycle responsibly, earn points, climb the leaderboard, and contribute to a greener planet.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/auth"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-green-700 transition"
            >
              Get Started
            </a>

            <a
              href="/dashboard"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-lg hover:bg-green-50 transition"
            >
              Go to Dashboard
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">♻️ Recycle</h3>
            <p className="text-gray-600">
              Submit your recycling activity and track your eco-impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🏆 Leaderboard</h3>
            <p className="text-gray-600">
              Compete with others and stay motivated through friendly rankings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🎁 Rewards</h3>
            <p className="text-gray-600">
              Earn points and unlock badges as you contribute more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

