export function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[100rem] mx-auto">{children}</div>;
}
