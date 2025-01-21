"use client"
import ui from "../../styles/ui.module.css"
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
<div className={ui.itembox}>
<form onSubmit={handleSubmit}>
<label>
        아침식사 여부 :    
        <input className={ui.input}
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
        <input className={ui.input}
        type="number"
        value={numberOfGuest}
        onChange={(e)=> {
            setNumberOfGuest(e.target.value);
        }}
        ></input>
    </label>
    <button className={ui.button} type="submit">제출</button>
</form>
</div>
)
};
 