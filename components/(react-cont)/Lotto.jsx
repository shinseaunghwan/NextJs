"use client"
import ui from "../../styles/ui.module.css"
import React, { useState, useEffect } from "react";

function LottoNumberGenerator() {
    const [lottoNumbers, setLottoNumbers] = useState([]);
    const [showNumbers, setShowNumbers] = useState(false);

    useEffect(() => {
        if (showNumbers) {
            const timer = setTimeout(() => {
                setShowNumbers(false);
            }, 60000);
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [showNumbers]);

    function generateRandomNumbers() {
        const maxNumber = 45;
        const selectedNumbers = new Set();

        while (selectedNumbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            selectedNumbers.add(randomNumber);
        }

        setLottoNumbers(Array.from(selectedNumbers));
        setShowNumbers(true);
    }

    return (
        <div>
            <button className={ui.button} onClick={generateRandomNumbers}>로또 번호</button>
            {showNumbers && (
                <ul style={{display:"flex", justifyContent:"space-evenly", marginTop: "1rem"}}>
                    {lottoNumbers.map((number) => (
                        <li key={number}>{number}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LottoNumberGenerator;
