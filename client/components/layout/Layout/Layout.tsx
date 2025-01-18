import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { TOKEN_LOCAL_STORAGE_KEY } from "@/constants/constants";
import { setToken } from "@/store/auth/auth.slice";
import { useAppDispatch } from "@/hooks/redux-hooks";

const toastStyles = { fontSize: "24px", color: "#252525" };

export function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
    if (tokenFromLocalStorage) {
      dispatch(setToken(tokenFromLocalStorage));
    }
  }, []);

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
