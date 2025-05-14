import { useState } from "react";
import "./App.css";
import MainRoutes from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Toaster position="top-right" reverseOrder={false} />

        <MainRoutes />
      </div>
    </>
  );
}

export default App;
