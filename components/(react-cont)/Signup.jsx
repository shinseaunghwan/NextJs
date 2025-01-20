"use client"

import React, {useState} from "react";
import ui from "../../styles/ui.module.css"

export default function SignUp() {
    const [name, setName] = useState("")
    const [gender, setGender] = useState('남자')
    const [year, setYear] = useState('')

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleChangeYear = (e) => {
        setYear(e.target.value)
    }

    const handleSubmit = (e) => {
        if(name === "") {
            alert("이름을 입력해주세요.");
        } 
        else if(year === "") {
            alert("나이를 입력해주세요.");
        } 
        else {
            alert(`성별은 ${gender}이며, 나이는 ${year}살이며, 이름은 ${name}입니다`);
        }
        e.preventDefault();
    };

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                이름 : &nbsp;
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <label>
                나이 : &nbsp;
                <input type="number" value={year} onChange={handleChangeYear}/>
            </label>
            <label>
                성별 : &nbsp;
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                <button className={ui.button} style={{marginLeft:".5rem"}} type="submit">제출</button>
            </label>
    
        </form>
    </div>
)
};
 