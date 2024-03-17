export function FullWidthButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full bg-bgGreen text-white uppercase py-4 font-bold">
      {children}
    </button>
  );
}
