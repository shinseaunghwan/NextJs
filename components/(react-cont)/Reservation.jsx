"use client"

import { useState } from "react";
import React from "react";

export default function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (e) => {
        alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        e.preventDefault();
    }

return (
<div>
<form onSubmit={handleSubmit}>
<label>
        아침식사 여부 :    
        <input
        type="checkbox"
        value={haveBreakfast}
        onChange={(e)=> {
            setHaveBreakfast(e.target.checked);
        }}
        ></input>
        <br/>
        </label>
    <label>
        방문객 수 :
        <input
        type="number"
        value={numberOfGuest}
        onChange={(e)=> {
            setNumberOfGuest(e.target.value);
        }}
        ></input>
    </label>
    <button type="submit">제출</button>
</form>
</div>
)
};
 