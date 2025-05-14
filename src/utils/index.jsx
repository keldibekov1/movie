import React from "react";
import { ImSpinner9 } from "react-icons/im";

export const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center bg-[#121212] text-white">
      <div className="flex flex-col items-center gap-4">
        <ImSpinner9 className="animate-spin text-4xl text-[#C61F1F]" />
        <p className="text-lg font-medium">Загрузка...</p>
      </div>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
