import { useState } from "react";
import Transactions from "./Transactions.jsx";
import ShowTransaction from "./ShowTransaction.jsx";

const Overview = () => {
  const [showTransactions, setShowTransactions] = useState(false);
  const [show, setShow] = useState(false);

  function toggleTransactions() {
    !showTransactions ? setShowTransactions(true) : setShowTransactions(false);
  }

  return (
    <>
      <div>
        <h2>Overview</h2>
        <ul>
          <li>Income</li>
          <li>Expense</li>
          <li>Savings</li>
        </ul>
      </div>
      <div>
        <h2>Quick Actions</h2>
        <button onClick={toggleTransactions}>Add Income/Expense</button>
        {showTransactions && <Transactions />}
        <button onClick={() => setShow(true)}>Show Transactions</button>
        {show && <ShowTransaction />}
      </div>
    </>
  );
};

export default Overview;
