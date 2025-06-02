import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen items-center justify-center flex">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="flex flex-col items-center gap-20"
        >
          <div className="flex flex-col items-center gap-5">
            <img src="OpenFlix.png" alt="" className="w-48 h-32" draggable={false}/>
            <p className="font-bold text-6xl text-primeblue">
              Open<span className="text-primered font-bold">Flix</span>
            </p>
          </div>
          <Button onClick={()=>navigate("/home")} className="cursor-pointer p-7 rounded-xl bg-primeblue hover:bg-primeblue shadow-[0_2px_8px_var(--color-primeblue)] hover:shadow-[0_4px_16px_var(--color-primeblue)] transition-shadow">
            <p className="text-lg">Start Watching</p>
          </Button>
        </motion.div>
    </div>
  );
};

export default Landing;
