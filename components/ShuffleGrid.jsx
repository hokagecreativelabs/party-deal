import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/img/image1.jpg",
  "/assets/img/image2.jpg",
  "/assets/img/image3.jpg",
  "/assets/img/image4.jpg",
  "/assets/img/image5.jpg",
  "/assets/img/image6.jpg",
];

const generateSquares = () => {
  return images.map((src, index) => ({ id: index, src }));
};

const ShuffleGrid = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    setSquares(generateSquares()); // Only shuffle after mounting to prevent SSR mismatch
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {squares.map(({ id, src }) => (
        <motion.div
          key={id}
          className="w-full h-32 bg-cover bg-center rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
};

export default ShuffleGrid;
