import { useState } from 'react';

export function usePantryItemState() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [expiry_date, setExpiryDate] = useState('');

  return {
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
  };
}
