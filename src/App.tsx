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
    getAllPantry();
  }, []);

  async function getAllPantry() {
    //
    try {
      const { data, error } = await Supabase.from('pantry_items').select();

      if (error) {
        setErrorMessage(
          `There was an error getting data from Supabase: ${error.message}`
        );
        setError(true);
      } else {
        setPantryItems(data || []);
        setError(false);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('An unexpected error occurred while fetching data.');
      setError(true);
    }
  }

  return (
    <main className="grid grid-cols-1 gap-2 md:grid-cols-3 ">
      {error ? (
        <h1>{errorMessage}</h1>
      ) : (
        <PantryItem pantryItems={pantryItems} />
      )}
    </main>
  );
}
