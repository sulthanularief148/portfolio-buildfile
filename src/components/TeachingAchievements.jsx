import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { achievementsData } from "../constants";

// Stagger animation for grid
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

// Each card appears with slight bounce
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const AchievementsGrid = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const getCardSize = (index) => {
    if (index === 0) return "col-span-2 row-span-2"; // Big hero card
    if (index === 1 || index === 2) return "col-span-1 row-span-2"; // Tall cards
    return "col-span-1 row-span-1"; // Normal square cards
  };

  return (
    <div className="py-10 px-4">
      <h2 className={`text-center my-4 ${styles.sectionHeadText}`}>
        My Achievements
      </h2>

      <motion.div
        className="md:grid grid-cols-1 flex flex-col  md:grid-cols-3 lg:grid-cols-4 gap-6 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {achievementsData.map((achievement, index) => {
          const isOpen = openId === achievement.id;
          const sizeClass = getCardSize(index);

          return (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.04, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className={`bg-tertiary rounded-2xl shadow-xl p-5 cursor-pointer flex flex-col justify-between ${sizeClass}`}
              onClick={() => toggleDetails(achievement.id)}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-bold text-[#C552EC]">
                  {achievement.title}
                </h2>
                <div className="text-white">
                  {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>

              {/* Description */}
              <p className="text-white italic mt-1">{achievement.duration}</p>
              <p className="text-secondary text-sm line-clamp-2">
                {achievement.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 my-3">
                {achievement.topicsCovered.slice(0, 4).map((topic, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Highlights - AnimatePresence for smooth open/close */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 overflow-hidden"
                  >
                    <h3 className="text-white text-sm font-semibold mb-1">
                      Highlights:
                    </h3>
                    <ul className="list-disc list-inside text-secondary space-y-1 text-xs">
                      {achievement.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(AchievementsGrid, "achievements");
