import { useEffect, useState } from 'react';
import { Supabase } from './config/supabaseClient';
interface StockItem {
  id: bigint;
  created_at: string;
  name: string | null;
  quantity: number | null;
  expirational_date: string | null;
  note: string | null;
  updated_at: string | null;
}

export default function App() {
  const [pantryItems, setPantryItems] = useState<StockItem[]>([]);

  useEffect(() => {
    getStock();
  }, []);

  async function getStock() {
    const { data, error } = await Supabase.from('stock').select();
    setPantryItems(data);
  }

  return (
    <main className="grid grid-cols-3 gap-2 ">
      {pantryItems &&
        pantryItems.map(item => (
          <div key={item.id} className="rounded border-[1px] p-2">
            <h1>{item.name}</h1>
            <p>{item.note}</p>
            <div>{item.quantity}</div>
            <div>{item.updated_at}</div>
          </div>
        ))}
    </main>
  );
}
