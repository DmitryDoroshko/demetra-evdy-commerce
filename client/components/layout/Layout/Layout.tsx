import React from "react";
import {Header} from "@/components/layout/Header/Header";
import {Footer} from "@/components/layout/Footer/Footer";

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}
