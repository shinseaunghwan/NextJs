"use client";

import { useState } from "react";
import ui from "../styles/ui.module.css"

export default function TabBox({ tabs, onClick }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedTabIndex(index);
    onClick(index); 
  };

  return (
    <div className={ui.tabbox}>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button onClick={() => handleClick(index)}>
              {selectedTabIndex === index ? (
                <>
                  {tab} <span className={ui.abs}>⭐</span>
                </>
              ) : (
                tab
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
