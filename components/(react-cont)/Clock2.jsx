"use client"

import React, { useState, useEffect } from 'react';

function Clock2() {
  const [time, setTime] = useState(new Date());
  
 useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <p>현재 시간은 {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock2;