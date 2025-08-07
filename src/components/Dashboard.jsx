const Dashboard = () => {
  const balance = 0;
  return (
    <>
      <div className="flex flex-col gap-8 border p-4 min-w-3xl">
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-xs p-4 pl-0">
            Your financial overview at a glance.
          </p>

          <h3 className="text-xl font-bold">Income vs. Expense</h3>
          <div className="flex flex-col border p-4">
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
          <h3>Spending by Category</h3>
          <div className="flex flex-col p-4">
            <img
              src="https://placehold.co/400x200"
              alt="chart"
              className="max-w-md max-h-md"
            />
          </div>
        </div>
        <div>
          <h3>Savings Goals</h3>
          <div className="flex flex-col p-4">
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
