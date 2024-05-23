import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import FormFields from '../components/FormFields';
import Button from '../components/UI/Button';

export const Route = createFileRoute('/create')({
  component: CreatePantryItem,
});

function CreatePantryItem() {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  async function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="mb-2 mt-6 flex flex-col gap-2">
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
          value={note}
          setChange={setNote}
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
          inputType="text"
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
          inputType="text"
          value={expiryDate}
          setChange={setExpiryDate}
        />
      </fieldset>
      <Button type="default">Submit</Button>
    </form>
  );
}
