import { createFileRoute } from '@tanstack/react-router';
import { Supabase } from '../../config/supabaseClient';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/pantry/$id')({
  component: PantryUpdate,
});

function PantryUpdate() {
  const { id } = Route.useParams();

  const [item, setItem] = useState(null);

  async function getItemById(itemId) {
    let { data, error } = await Supabase.from('pantry_items')
      .select('*')
      .eq('id', itemId)
      .single();

    if (error) {
      console.error('Error fetching item:', error);
    } else {
      setItem(data);
    }
  }
  useEffect(() => {
    if (id) {
      getItemById(id);
    }
  }, [id]);

  return (
    <div>
      <h1>Hello {id}</h1>
      {item && (
        <div>
          <h2>Item Details</h2>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          {/* Render other item details here */}
        </div>
      )}
    </div>
  );
}
