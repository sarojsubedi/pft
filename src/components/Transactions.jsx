import { useState, useContext } from "react";
import AddTransaction from "./AddTransaction.jsx";
import { BalanceContext } from "../context/BalanceContext.js";
const Transactions = () => {
  const { balance, setBalance } = useContext(BalanceContext);
  const [userInput, setUserInput] = useState(0);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  function addTransaction(e) {
    e.preventDefault();
    if (!isNaN(userInput)) {
      setBalance(() => balance + userInput);
      setShowAddTransaction(true);
    }
    setUserInput(0);
  }
  function deleteTransaction(e) {
    e.preventDefault();
    setBalance(0);
  }

  return (
    <>
      <div>
        <form>
          <input
            type="number"
            autoFocus="autofocus"
            value={userInput}
            placeholder="Enter your income or expense"
            onChange={(e) => setUserInput(parseFloat(e.target.value))}
            className="max-w-3xs border-1 p-1 hover:border-gray-400"
          />
          <br />
          <button onClick={addTransaction} className="border-1 p-2 mt-4 mr-4">
            Add transaction
          </button>
          <button onClick={deleteTransaction} className="border-1 p-2 mt-4">
            Reset Transaction
          </button>
          <div>
            {isNaN(userInput) ? <span>Enter a valid number!</span> : <span />}
          </div>
        </form>
      </div>
      {showAddTransaction && (
        <AddTransaction balance={balance} userInput={userInput} />
      )}
    </>
  );
};

export default Transactions;
