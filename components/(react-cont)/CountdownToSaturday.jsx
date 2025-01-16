"use client"

import React, { useState, useEffect } from "react";

function CountdownToSaturday() {
    const [remainingTime, setRemainingTime] = useState(null);
    const today = new Date();

    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'ko-kr',
            {weekday: 'long'}
        ).format(date);
    }

    useEffect(() =>{ 
        const targetTime = new Date();
        targetTime.setHours(18);
        targetTime.setMinutes(0);
        targetTime.setSeconds(0);

        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = targetTime - currentTime;

            if (timeDifference <= 0) {
                clearInterval(intervalId);
                setRemainingTime("오후 6시가 지났습니다.");
            } else {
                const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                setRemainingTime(`${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <p>({formatDate(today)}) 퇴근까지 {remainingTime}</p>
        </div>
    );
}

export default CountdownToSaturday;