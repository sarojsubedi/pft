import { useState, useEffect } from "react";
import { supabase } from "../libs/supabase";
import { BalanceContext } from "./BalanceContext";

const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      const { data, error } = await supabase
        .from("userdata")
        .select("balance")
        .eq("id", 19)
        .single();
      if (error) setError(error.message);
      else setBalance(data.balance);
    }
    fetchBalance();
  }, []);

  return (
    <BalanceContext.Provider value={{ balance, setBalance, error }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
