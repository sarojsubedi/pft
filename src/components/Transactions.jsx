import {useState} from 'react';
import Dashboard from './Dashboard';

const Transactions = () => {
    const [balance, setBalance] = useState(0);
    const [userInput, setUserInput] = useState(0);
    // const transaction = parseFloat(userInput);
    function handleClick(e){
        e.preventDefault();
        if (!isNaN(userInput)) {setBalance(prevBalance => prevBalance + userInput);}
        setUserInput(0);
    }

  return (
    <>
    <div>
        <form action="">
        <input type="number" value = {userInput} placeholder = "Enter your income or expense" onChange={(e)=> setUserInput(parseFloat(e.target.value))}/>
        <button onClick={handleClick}>Add transaction</button>
        <div>{isNaN(userInput) ? <span>Enter a valid number!</span>:<span>Your Balance:</span>}</div>
        <div>{balance.toFixed(2)}</div>
        </form>
        <Dashboard balance = {balance}/>
    </div>
    </>
  )
}

export default Transactions