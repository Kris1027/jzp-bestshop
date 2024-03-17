export function FlexContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[100rem] mx-auto flex justify-between">
      {children}
    </div>
  );
}
