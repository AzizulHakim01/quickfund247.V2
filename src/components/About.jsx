import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-[#00D1A9] to-[#00d1a0] bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Experience Trustworthy Lending with a Commitment to Your Success!
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            "Discover the Difference: Tailored Solutions, Transparent Processes,
            and Unmatched Support for Your Financial Journey."
          </p>
        </motion.div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="rounded-md border border-neutral-800  p-8 text-center shadow"
          >
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                borderColor: "#e6e6e6",
                backgroundColor: "#00d1a9",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler text-[#00d1a9]"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#ffffff"
                fill="#00d1a9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                <line x1={17} y1={17} x2={17} y2="17.01" />
              </svg>
            </div>
            <h3 className="mt-6 text-[#00d1a9] font-bold">
              Highly competent and experienced
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Highly competent, deeply experienced. Trust a team with a proven
              track record for your financial needs. Excellence is our
              expertise.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className="rounded-md border border-neutral-800  p-8 text-center shadow"
          >
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{ borderColor: "#e6e6e6", backgroundColor: "#00d1a9" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bolt"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
              </svg>
            </div>
            <h3 className="mt-6 text-[#00d1a9] font-bold">
              Values long-term relationships
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Committed to lasting relationships. Your trust matters. Choose a
              partner invested in your long-term financial success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="rounded-md border border-neutral-800 p-8 text-center shadow"
          >
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                borderColor: "#e6e6e6",
                backgroundColor: "#00d1a9",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-tools"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                <polyline points="12 8 7 3 3 7 8 12" />
                <line x1={7} y1={8} x2="5.5" y2="9.5" />
                <polyline points="16 12 21 17 17 21 12 16" />
                <line x1={16} y1={17} x2="14.5" y2="18.5" />
              </svg>
            </div>
            <h3 className="mt-6 text-[#00d1a9] font-bold">
              Technology driven with a human touch
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Tech-driven, Human-centered. Elevate your lending experience with
              the perfect fusion of technology and personalized service. Your
              financial goals, simplified and supported.
            </p>
          </motion.div>
        </div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default About;
