import React from "react";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
}
