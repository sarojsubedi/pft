import {useState, useEffect} from 'react';
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_API_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const {data, error} = await supabase
  .from ('userdata')
  .select('balance')

const Transactions = () => {
    const [balance, setBalance] = useState(0);
    const [userInput, setUserInput] = useState(0);

    useEffect(() => {
      async function handleClick() {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        setBalance(result.id);
      }
      handleClick();
    }, [])
    

    function stopReload(e){
        e.preventDefault();
        if (!isNaN(userInput)) {setBalance(prevBalance => prevBalance + userInput);}
        setUserInput(0);
    }

  return (
    <>
    <div>
        <form action="">
        <input type="number" value = {userInput} placeholder = "Enter your income or expense" onChange={(e)=> setUserInput(parseFloat(e.target.value))}/>
        <button onClick={stopReload} >Add transaction</button>
        <div>{isNaN(userInput) ? <span>Enter a valid number!</span>:<span>Your Balance:</span>}</div>
        {/* <div>{balance.toFixed(2)}</div> */}
        <div>{data.balance}</div>
        </form>
    </div>
    </>
  )
}

export default Transactions