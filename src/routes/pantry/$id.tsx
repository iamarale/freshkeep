import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { Supabase } from '../../config/supabaseClient';
import { useEffect, useState } from 'react';
import { usePantryItemState } from '../../hooks/usePantryItemState';
import FormFields from '../../components/FormFields';
import Button from '../../components/UI/Button';

// Route
export const Route = createFileRoute('/pantry/$id')({
  component: PantryUpdate,
});

// Component
function PantryUpdate() {
  // dynamic route id
  const { id } = Route.useParams();

  // state
  const [item, setItem] = useState(null);
  const {
    name,
    setName,
    notes,
    setNotes,
    category,
    setCategory,
    quantity,
    setQuantity,
    unit,
    setUnit,
    expiry_date,
    setExpiryDate,
  } = usePantryItemState();

  // gets the itemId
  async function getItemById(itemId) {
    let { data, error } = await Supabase.from('pantry_items')
      .select('*')
      .eq('id', itemId)
      .single();

    if (error) {
      console.error('Error fetching item:', error);
    } else {
      setItem(data);
      setName(data.name || '');
      setNotes(data.notes || '');
      setCategory(data.category || '');
      setQuantity(data.quantity || '');
      setUnit(data.unit || '');
      setExpiryDate(data.expiry_date || '');
    }
  }

  async function updatePantryItem(e) {
    e.preventDefault();
    const { data, error } = await Supabase.from('pantry_items')
      .update({
        name: name,
        category: category,
        notes: notes,
        quantity: quantity,
        unit: unit,
        expiry_date: expiry_date,
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating item:', error);
    } else {
      console.log('Item updated successfully:', data);
    }
  }

  useEffect(() => {
    if (id) {
      getItemById(id);
    }
  }, [id]);

  return (
    <div>
      <h1>Updating {id}</h1>
      <form onSubmit={updatePantryItem}>
        <fieldset>
          <FormFields
            labelName="Name"
            inputId="name"
            inputType="text"
            value={name}
            setChange={setName}
          />
          <FormFields
            labelName="Note"
            inputId="note"
            inputType="text"
            value={notes}
            setChange={setNotes}
          />
          <FormFields
            labelName="Category"
            inputId="category"
            inputType="text"
            value={category}
            setChange={setCategory}
          />
          <FormFields
            labelName="Quantity"
            inputId="quantity"
            inputType="number"
            value={quantity}
            setChange={setQuantity}
          />
          <FormFields
            labelName="Unit"
            inputId="unit"
            inputType="text"
            value={unit}
            setChange={setUnit}
          />
          <FormFields
            labelName="Expiry Date"
            inputId="expiryDate"
            inputType="date"
            value={expiry_date}
            setChange={setExpiryDate}
          />
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
