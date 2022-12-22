import NavBar from "./NavBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen">
      <NavBar />
      {children}
    </main>
  );
};
