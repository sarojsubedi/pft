import { useEffect, useState } from "react";
import { supabase } from "../libs/supabase.js";

const ShowTransaction = () => {
  const [localData, setLocalData] = useState(0);
  useEffect(() => {
    async function getTransaction() {
      const { data, error } = await supabase
        .from("userdata")
        .select("balance")
        .single();

      setLocalData(data);
    }
    getTransaction();
  }, [localData]);

  return (
    <div>
      <h2>Transaction History</h2>
      <div>{localData.balance}</div>
    </div>
  );
};

export default ShowTransaction;
