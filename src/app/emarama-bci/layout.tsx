export default function EmaramaBciBareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh w-full overflow-hidden bg-white">{children}</div>
  );
}
