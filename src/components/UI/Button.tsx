export default function Button({ children }: { children: string }) {
  return (
    <button className="rounded bg-neutral-300 px-3 text-neutral-700  duration-200 hover:opacity-80">
      {children}
    </button>
  );
}
