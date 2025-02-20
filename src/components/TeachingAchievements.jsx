import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const achievementsData = [
  {
    id: 1,
    title: "Frontend Development Instructor",
    duration: "3 Months",
    description:
      "Successfully taught frontend development to students, focusing on practical implementations and building real-world projects.",
    topicsCovered: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
    highlights: [
      "Guided students through building responsive web applications.",
      "Emphasized best practices in frontend development and UI/UX principles.",
      "Introduced state management using React hooks and advanced component patterns.",
    ],
  },
];

const AchievementCard = ({ achievement }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary rounded-2xl shadow-lg p-6 w-full max-w-2xl mx-auto mb-6" 
    >
      <h2 className="text-2xl font-semibold text-white mb-2 flex justify-between items-center">
        {achievement.title}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-white hover:text-gray-800"
        >
          {showDetails ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </h2>
      <p className="text-white mb-4 italic">Duration: {achievement.duration}</p>
      <p className="text-secondary mb-4">{achievement.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {achievement.topicsCovered.map((topic, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-2">Key Highlights:</h3>
          <ul className="list-disc list-inside text-secondary space-y-1">
            {achievement.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const TeachingAchievements = () => {
  return (
    <div className="py-10 px-4 text-white">
     
      <h2 className={`text-center my-4 ${styles.sectionHeadText}`}>My Achievements</h2>
      {achievementsData.map((achievement) => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </div>
  );
};

export default SectionWrapper(TeachingAchievements, "achievements");
