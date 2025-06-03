import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen items-center justify-center flex flex-col gap-20 self-center justify-self-center w-full">
      <div className="flex flex-col items-center gap-5">
        <p className="text-9xl font-bold text-primeblue">
          4<span className="font-bold text-primered">0</span>4
        </p>
        <p className="text-3xl">Page Not Found</p>
      </div>
      <Button
        onClick={() => navigate("/home")}
        className="cursor-pointer p-7 rounded-xl bg-primeblue hover:bg-primeblue shadow-[0_2px_8px_var(--color-primeblue)] hover:shadow-[0_4px_16px_var(--color-primeblue)] transition-shadow"
      >
        <p className="text-lg">Go to Home</p>
      </Button>
    </div>
  );
};

export default NotFound;
