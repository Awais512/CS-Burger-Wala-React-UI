import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home">
      <div>
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Burgerwala
        </motion.h1>
        <motion.p
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get yourself a tasty Burger
        </motion.p>
      </div>

      <motion.a
        href="#menu"
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Explore Menu
      </motion.a>
    </section>
  );
};

export default Home;
