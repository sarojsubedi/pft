const Dashboard = () => {
  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <p>Your financial overview at a glance.</p>

        <h3>Income vs Expense</h3>
        <div className="card">
          last 6 mo chart here
          <span>
            <strong>Rs.</strong>
          </span>
        </div>
      </div>
      <div>
        <h3>Spending by Category</h3>
        <div className="card">monthly chart here</div>
      </div>
      <div>
        <h3>Savings Goals</h3>
        <div className="card">savings by category ko bar</div>
      </div>
    </>
  );
};

export default Dashboard;
