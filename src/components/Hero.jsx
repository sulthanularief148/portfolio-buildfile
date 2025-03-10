import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import Squares from "./Squares";
const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" }
    }),
  };
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <Squares
        speed={0.5}
        squareSize={120}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#C552EC'
        hoverFillColor='#222'
      />
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Vertical Line and Dot */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-secondary" />
        </div>

        {/* Type Animation */}
        <div>
          <TypeAnimation
            className={`${styles.heroHeadText}`}
            style={{ fontSize: "3.1em", color: "#C552EC" }}
            sequence={[
              "Hello, I'm Sulthanul Arief, a web developer.",
              1000,
              "Hello, I'm also an app developer.",
              1000,
              "Greetings! I specialize in React development.",
            ]}
            speed={20}
            repeat={Infinity}
          />
        </div>
      </div>

      {/* Blog Button & Social Icons */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/blogs">
          <button className="mt-6 px-6 py-3 hover:bg-primary text-white font-bold text-lg rounded-lg shadow-lg bg-[#C552EC] transition-all duration-300">
            🚀 Explore Blogs
          </button>
        </Link>

        <div className="flex gap-4 mt-4">
          <SocialIcon network="github" url="https://github.com/sulthanularief148" />
          <SocialIcon network="linkedin" url="https://www.linkedin.com/in/sulthanul-arief-a47138226" />
          <SocialIcon network="instagram" url="https://www.instagram.com/arief_ibnu_mohamed" />
        </div>
      </div> */}

      {/* Blog Button & Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute md:top-1/2 top-[60%] md:left-[43%] left-[25%]  -translate-x-1/2 -translate-y-1/2"
      >
        <Link to="/blogs">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(197, 82, 236, 0.8)"
            }}
            className="mt-6 px-6 py-3 bg-primary text-white font-bold text-lg rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
          >
            🚀 Explore Blogs
          </motion.button>
        </Link>




        <div className="flex gap-4 mt-4">
          <SocialIcon network="github" url="https://github.com/sulthanularief148" />
          <SocialIcon network="linkedin" url="https://www.linkedin.com/in/sulthanul-arief-a47138226" />
          <SocialIcon network="instagram" url="https://www.instagram.com/arief_ibnu_mohamed" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
