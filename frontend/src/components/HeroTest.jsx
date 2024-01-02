import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroTest = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY;

      if (st > lastScrollTop) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }

      lastScrollTop = st;
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    controls.start({ y: scrollingDown ? 50 : 0 }); // Adjust the distance as needed
  }, [scrollingDown]);

  return (
    <section className="bg-hero-pattern md:bg-top bg-center bg-fixed">
      <motion.div className="flex justify-center h-full bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="flex justify-center max-w-screen-xl px-4 mx-auto flex-col md:h-[600px] h-[450px] items-center">
          <motion.h1
            className="max-w-2xl capitalize mb-4 text-4xl font-extrabold text-[#ffffff] tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center"
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Smart solutions for smart businesses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-6 font-light text-white text-center lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            We help small businesses with cost-effective funding solutions up to
            $1 million.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#00D1A9] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Request a Free Quote
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-white mb-6 font-light mt-4 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Checking rates won’t affect your credit score.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroTest;
