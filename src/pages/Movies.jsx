import React from "react";
import { motion } from "framer-motion";

const Movies = () => {
  return (
    <div className="px-10 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        Movies
      </motion.div>
    </div>
  );
};

export default Movies;
