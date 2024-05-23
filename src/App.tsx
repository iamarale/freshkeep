import { useEffect, useState } from 'react';
import { Supabase } from './config/supabaseClient';
import PantryItem from './components/PantryItem';
interface PantryType {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiry_date: Date;
  date_added: Date;
  notes: string;
}

export default function App() {
  const [pantryItems, setPantryItems] = useState<PantryType[]>([]); // Correct type for array of PantryType
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getStock();
  }, []);

  async function getStock() {
    const { data, error } = await Supabase.from('pantry_items').select();

    if (error) {
      setErrorMessage(`There was an error getting data from supabase ${error}`);
      setError(true);
      return;
    }

    if (data) {
      setPantryItems(data);
      setErrorMessage('');
      setError(false);
    }
  }

  return (
    <main className="grid grid-cols-1 gap-2 md:grid-cols-3 ">
      <h1>hell {errorMessage}</h1>
      {error ? (
        <h1>{errorMessage}</h1>
      ) : (
        <PantryItem pantryItems={pantryItems} />
      )}
    </main>
  );
}
