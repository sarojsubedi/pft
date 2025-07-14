import {useState} from 'react';

const Transactions = () => {
    const [balance, setBalance] = useState(0);
    const [userInput, setUserInput] = useState(0);
    const transaction = parseFloat(userInput);
    function handleClick(e){
        e.preventDefault();
        setBalance(prevBalance => prevBalance + transaction);
        setUserInput("");
    }

  return (
    <>
    <div>
        <form action="">
        <input type="number" value = {userInput} placeholder = "Enter your income or expense" onChange={(e)=> setUserInput(e.target.value)}/>
        <button onClick={handleClick}>Add transaction</button>
        <div>{isNaN(transaction) ? <span>Enter a valid number!</span>:<span>Your Balance:</span>}</div>
        <div>{balance.toFixed(2)}</div>
        </form>
    </div>
    </>
  )
}

export default Transactions