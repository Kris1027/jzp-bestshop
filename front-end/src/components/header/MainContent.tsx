export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex items-center justify-between py-4">
      {children}
    </header>
  );
}
