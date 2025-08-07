const Dashboard = () => {
  const balance = 0;
  return (
    <>
      <div className="flex flex-col gap-8 p-4 min-w-3xl">
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-xs p-4 pl-0">
            Your financial overview at a glance.
          </p>
          <h3 className="text-xl font-bold mb-4">Income vs. Expense</h3>
          <div className="flex flex-col p-4 border border-gray-300 rounded-2xl">
            Last 6 months
            <span className="font-bold">Rs. {balance}</span>
            <img
              src="https://placehold.co/400x200"
              alt="chart"
              className="max-w-md max-h-md"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Spending by Category</h3>
          <div className="flex flex-col mt-4 p-4 border border-gray-300 rounded-2xl">
            <img
              src="https://placehold.co/400x200"
              alt="chart"
              className="max-w-md max-h-md"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Savings Goals</h3>
          <div className="flex flex-col mt-4 p-4 border border-gray-300 rounded-2xl">
            <img
              src="https://placehold.co/400x200"
              alt="chart"
              className="max-w-md max-h-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
