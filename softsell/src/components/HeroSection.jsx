import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero bg-blue-600 text-white p-10">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to SoftSell!
      </motion.h1>
      <motion.p
        className="mt-4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Your trusted partner in software resale.
      </motion.p>
    </section>
  );
};

export default HeroSection;
