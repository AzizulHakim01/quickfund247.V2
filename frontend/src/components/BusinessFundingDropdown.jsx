import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BusinessFundingDropdown = ({ location }) => {
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.li className="relative group z-10">
      <p className="cursor-pointer hover:text-[#00D1A9] text-slate-700 transition-all duration-300 ease-in-out">
        Business Funding
      </p>
      <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        className="hidden bg-white absolute z-10 top-full left-0 w-96 p-4 mb-4 group-hover:block "
      >
        <motion.div variants={linkVariants}>
          <Link
            to={"/long-term"}
            className={`hover:text-[#00D1A9] ${
              location.pathname === "/long-term" ? "text-[#00D1A9] font-bold" : ""
            }`}
          >
            Business Term Loan
          </Link>
        </motion.div>
        <motion.div variants={linkVariants}>
          <Link
            to={"/sba"}
            className={`hover:text-[#00D1A9] ${
              location.pathname == "/sba" ? "text-[#00D1A9] font-bold" : ""
            }`}
          >
            SBA Loans
          </Link>
        </motion.div>
        <motion.div variants={linkVariants}>
          <Link
            to={"/loc"}
            className={`hover:text-[#00D1A9] ${
              location.pathname == "/loc" ? "text-[#00D1A9] font-bold" : ""
            }`}
          >
            Business Line of Credit
          </Link>
        </motion.div>
        <motion.div variants={linkVariants}>
          <Link
            to={"/equipment"}
            className={`hover:text-[#00D1A9] ${
              location.pathname == "/equipment" ? "text-[#00D1A9] font-bold" : ""
            }`}
          >
            Equipment Financing
          </Link>
        </motion.div>
        <motion.div variants={linkVariants}>
          <Link
            to={"/working-capital"}
            className={`hover:text-[#00D1A9] ${
              location.pathname == "/working-capital" ? "text-[#00D1A9] font-bold" : ""
            }`}
          >
            Working Capital / Invoice Factoring
          </Link>
        </motion.div>
      </motion.div>
    </motion.li>
  );
};

export default BusinessFundingDropdown;
