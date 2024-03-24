import { motion } from "framer-motion";
import { useState } from "react";
import { AdminHeader } from "../sections/";

// https://www.youtube.com/watch?v=kep_Iaxuzy0&ab_channel=SamSelikoff

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

function Follow() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      {activeTab == "world" ? <AdminHeader /> : console.log("deneme2")}
      <div className="flex space-x-1 bg-sac-primary-dark">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Follow;
