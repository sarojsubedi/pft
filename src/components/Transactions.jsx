import {useState, useEffect} from 'react';
import {supabase} from '../libs/supabase.js';
import AddTransaction from './AddTransaction.jsx';

const Transactions = () => {
    const [user, setUser] = useState([]);
    const [balance, setBalance] = useState(0);
    const [userInput, setUserInput] = useState(0);
    const [showAddTransaction, setShowAddTransaction] = useState(false);
    
    useEffect(() => {
      async function getBalance() {
        const { data } = await supabase.from('userdata').select();
        setUser(data);
      }
      getBalance();
    }, [])
    
    function addTransaction(e){
        e.preventDefault();
        if (!isNaN(userInput)) {
          setBalance(prevBalance => prevBalance + userInput);
          setShowAddTransaction(true);
        }
        setUserInput(0);
    }

  return (
    <>
    <div>
        <form action="">
        <input type="number" value = {userInput} placeholder = "Enter your income or expense" onChange={(e)=> setUserInput(parseFloat(e.target.value))}/>
        <button onClick={addTransaction} >Add transaction</button>
        <div>{isNaN(userInput) ? <span>Enter a valid number!</span>:<span>Your Balance:</span>}</div>
          <div>{user.map((item)=> (
            <span key={item.id}>
              {item.balance}
            </span>
          ))}</div>
        </form>
    </div>
    {showAddTransaction && <AddTransaction balance={balance} userInput={userInput} />}
    </>
  )
}

export default Transactions