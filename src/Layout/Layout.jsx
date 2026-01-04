// Layout.jsx
import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20 container">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
