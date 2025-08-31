import { supabase } from "../libs/supabase";
import { useState, useEffect } from "react";

const AddTransaction = ({ balance }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function addTransaction() {
      const { data, error } = await supabase
        .from("userdata")
        .update({ balance: balance })
        .eq("id", 19)
        .select();
      if (error) {
        setError(error.message);
        console.error("Supabase error:", error);
      } else {
        setUser(data);
        console.log("Supabase response:", data);
      }
    }
    if (balance !== null && !isNaN(balance)) {
      addTransaction();
    } else {
      console.log("Invalid balance:", balance);
    }
  }, [balance]);

  return (
    <div>
      <div>Balance: {balance}</div>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
};

export default AddTransaction;
