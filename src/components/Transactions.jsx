import { useState, useEffect, useContext } from "react";
import { supabase } from "../libs/supabase.js";
import AddTransaction from "./AddTransaction.jsx";
import { BalanceContext } from "../context/BalanceContext.js";
const Transactions = () => {
  const [user, setUser] = useState([]);
  const { balance, setBalance } = useContext(BalanceContext);
  const [userInput, setUserInput] = useState(0);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  // useEffect(() => {
  //   async function getBalance() {
  //     const { data } = await supabase.from("userdata").select();
  //     setUser(data[0]);
  //   }
  //   getBalance();
  // }, []);

  function addTransaction(e) {
    e.preventDefault();
    if (!isNaN(userInput)) {
      setBalance(() => balance + userInput);
      setShowAddTransaction(true);
    }
    setUserInput(0);
  }

  return (
    <>
      <div>
        <form>
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
