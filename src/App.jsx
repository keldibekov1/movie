import { useState } from "react";
import "./App.css";
import MainRoutes from "./pages";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google"; 

function App() {
  const clientId = "763392239055-dag8icbaqa09gup4ac31lc9aj4k824fr.apps.googleusercontent.com"; 
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <div className="min-h-screen flex flex-col bg-black text-white">
          <Toaster position="top-right" reverseOrder={false} />
          <MainRoutes />
        </div>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
