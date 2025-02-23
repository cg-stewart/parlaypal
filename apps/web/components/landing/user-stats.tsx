export default function UserStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Join Thousands of Winning Bettors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-green-400">50,000+</p>
          <p className="text-xl text-gray-300">Active Users</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-green-400">1M+</p>
          <p className="text-xl text-gray-300">Bets Tracked</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-green-400">$10M+</p>
          <p className="text-xl text-gray-300">Winnings Recorded</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-green-400">98%</p>
          <p className="text-xl text-gray-300">User Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
