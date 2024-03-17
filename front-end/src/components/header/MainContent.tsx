export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      {children}
    </div>
  );
}
