import {useState, useEffect} from 'react';
import {supabase} from '../libs/supabase';

const Transactions = () => {
    const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(0);
    const [userInput, setUserInput] = useState(0);
    
    useEffect(() => {
      async function getBalance() {
        const { data } = await supabase.from('userdata').select()
        setUser(data);
      }
      getBalance();
    }, [])
    

    function stopReload(e){
        e.preventDefault();
        if (!isNaN(userInput)) {
          setBalance(prevBalance => prevBalance + userInput);
        }
        setUserInput(0);
    }

  return (
    <>
    <div>
        <form action="">
        <input type="number" value = {userInput} placeholder = "Enter your income or expense" onChange={(e)=> setUserInput(parseFloat(e.target.value))}/>
        <button onClick={stopReload} >Add transaction</button>
        <div>{isNaN(userInput) ? <span>Enter a valid number!</span>:<span>Your Balance:</span>}</div>
        <div>
          {user.map(item=> (
            <div>
              {item.balance}
            </div>
          ))}
        </div>
        </form>
    </div>
    </>
  )
}

export default Transactions