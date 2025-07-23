import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_API_URL, import.meta.env.VITE_SUPABASE_KEY);

function SupabaseTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("userdata").select();
    setData(data);
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.balance}</li>
      ))}
    </ul>
  );
}

export default SupabaseTest;