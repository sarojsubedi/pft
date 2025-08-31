import { useState, useEffect } from "react";
import { supabase } from "../libs/supabase.js";
import AddTransaction from "./AddTransaction.jsx";
import ShowTransaction from "./ShowTransaction.jsx";

const Transactions = () => {
  const [user, setUser] = useState([]);
  const [balance, setBalance] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  useEffect(() => {
    async function getBalance() {
      const { data } = await supabase.from("userdata").select();
      setUser(data);
    }
    getBalance();
  }, []);

  function addTransaction(e) {
    e.preventDefault();
    if (!isNaN(userInput)) {
      setBalance(() => user[0].balance + userInput);
      setShowAddTransaction(true);
    }
    setUserInput(0);
  }

  return (
    <>
      <div>
        <form action="">
          <input
            type="number"
            value={userInput}
            placeholder="Enter your income or expense"
            onChange={(e) => setUserInput(parseFloat(e.target.value))}
            className="max-w-3xs border hover:border-gray-400"
          />
          <br />
          <button onClick={addTransaction} className="">
            Add transaction
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
