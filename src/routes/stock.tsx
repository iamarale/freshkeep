import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stock")({
  component: Stock,
});

function Stock() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Stocks</h1>
    </main>
  );
}
