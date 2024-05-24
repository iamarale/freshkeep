import { Link, createFileRoute } from '@tanstack/react-router';
import FormFields from '../components/FormFields';
import Button from '../components/UI/Button';
import { Supabase } from '../config/supabaseClient';
import { usePantryItemState } from '../hooks/usePantryItemState';

export const Route = createFileRoute('/create')({
  component: CreatePantryItem,
});

function CreatePantryItem() {
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

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await Supabase.from('pantry_items')
      .insert({
        name,
        notes,
        category,
        quantity,
        unit,
        expiry_date,
      })
      .select();

    console.log(error);
  }

  console.log(name, quantity, category, notes, unit, expiry_date);
  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold ">Create a Pantry Item</h1>
      <fieldset className="mb-2 mt-3 flex flex-col gap-2">
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
      <Link to="/">
        <Button type="default">Submit</Button>
      </Link>
    </form>
  );
}
