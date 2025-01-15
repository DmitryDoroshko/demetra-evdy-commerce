import React from "react";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { ToastContainer } from "react-toastify";

const toastStyles = { fontSize: "24px", color: "#252525" };

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
      <ToastContainer aria-label="Toast message"
                      position="bottom-right"
                      style={toastStyles} />
    </div>
  );
}
