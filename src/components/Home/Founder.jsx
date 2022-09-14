import React from "react";
import { motion } from "framer-motion";
import founder from "../../assets/founder.jpg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacityL: 0,
    },
    whileInView: {
      x: 0,
      opacityL: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={founder} alt="" height={200} width={200} />
        <h3>Awais Chaudhary</h3>
        <p>
          Hi, I am Awais Chaudhary, The founder of Burgerwala. <br /> Our aim is
          to provide the delicious burger to you
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
