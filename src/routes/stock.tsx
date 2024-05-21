import { createFileRoute, createLink } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import FormField from "../components/form/FormField";

import { Supabase } from "../config/supabaseClient";

export const Route = createFileRoute("/stock")({
  component: Stock,
});

function Stock() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiration, setExpiration] = useState("");
  const [formError, setFormError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await Supabase.from("stock")
      .insert({ name, note, quantity })
      .select();

    if (error) {
      setFormError(error);
    }
    if (data) {
      console.log(data);
    }

    setName("");
    setNote("");
    setQuantity("");
    setExpiration("");
    setFormError("");
  };

  return (
    <main>
      <h1 className="text-2xl pb-4">Update your pantry</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Expiration"
          id="expiration"
          type="date"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <FormField
          label="Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormField
          label="Note"
          id="note"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <FormField
          label="Quantity"
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Submit</button>
        {formError}
      </form>
    </main>
  );
}
