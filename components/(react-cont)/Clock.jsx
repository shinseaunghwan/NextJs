"use client"
import ui from "../../styles/ui.module.css"
import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState('#111');

  // 랜덤한 색상을 생성하는 함수
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
      <p style={{ margin: "1rem 0", color: color }}>현재 시간은 {time.toLocaleTimeString()}</p>
      <button className={ui.button} style={{ margin: "1rem 0"}} onClick={() => setColor(getRandomColor())}>색상변경 버튼</button>
    </div>
  );
}

export default Clock;