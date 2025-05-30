import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import CountUp from "@/components/react-bits/CountUp.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="min-h-screen items-center justify-center flex">
      {isLoading && (
        <div className="before:border-primeblue before:border-s-8 before:border-t-8 relative before:absolute before:w-40 before:h-40 before:rounded-full before:animate-spin flex justify-center items-center">
          <CountUp
            from={0}
            to={100}
            duration={0.2}
            delay={0.5}
            className="text-5xl font-semibold text-primered"
          />
        </div>
      )}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center gap-20"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="w-48 h-32 bg-[url('OpenFlix.svg')] bg-cover"></div>
            <p className="font-bold text-6xl text-primeblue">
              Open<span className="text-primered font-bold">Flix</span>
            </p>
          </div>
          <Button onClick={()=>navigate("/home")} className="cursor-pointer p-7 rounded-xl bg-primeblue hover:bg-primeblue shadow-[0_2px_8px_var(--color-primeblue)] hover:shadow-[0_4px_16px_var(--color-primeblue)] transition-shadow">
            <p className="text-lg">Start Watching</p>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Landing;
