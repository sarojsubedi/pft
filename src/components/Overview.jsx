import { useState } from "react";
import Transactions from "./Transactions.jsx";
import ShowTransaction from "./ShowTransaction.jsx";

const Overview = () => {
  const [showTransactions, setShowTransactions] = useState(false);
  const [addTransactions, setAddTransactions] = useState(false);

  const toggleAddTransactions = () => {
    addTransactions ? setAddTransactions(false) : setAddTransactions(true);
  };
  const toggleShowTransactions = () =>
    showTransactions ? setShowTransactions(false) : setShowTransactions(true);

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Overview</h2>
        <ul className="flex flex-col gap-4 m-4 p-1">
          <li>Income</li>
          <li>Expense</li>
          <li>Savings</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Quick Actions</h2>
        <div className="flex flex-col flex-wrap items-start gap-4 p-4">
          <button
            className="border-2 p-2 bg-blue-500 text-white w-3xs hover:bg-white hover:text-blue-500 rounded-2xl"
            onClick={toggleAddTransactions}
          >
            Add Income
          </button>
          {addTransactions && <Transactions />}
          <button
            className="border-2 p-2 bg-orange-500 text-white w-3xs hover:bg-white hover:text-orange-500 rounded-2xl"
            onClick={toggleShowTransactions}
          >
            Show Transactions
          </button>
          {showTransactions && <ShowTransaction />}
        </div>
      </div>
    </>
  );
};

export default Overview;
