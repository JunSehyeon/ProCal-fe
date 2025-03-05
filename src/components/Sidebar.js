import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../styles/Sidebar.style.css";

function Sidebar({selectedDate}){
    const [memo, setMemo]=useState("");
    return(
        <aside className="sidebar">
            <Link to="/login">로그인</Link>
            <p>{selectedDate ? selectedDate.toLocaleDateString():"날짜를 선택하세요"}</p>
            <h3>자격증 목록</h3>
            <ul>
                <li><Link to="/detail/OPIC">📌 오픽</Link></li>
                <li><Link to="/detail/TOEIC">📌 토익</Link></li>
            </ul>
            <p>📝 나만의 메모 →<input
            type="text"
            value={memo}
            onChange={(e)=> setMemo(e.target.value)}
            placeholder="메모를 입력하세요"/></p>
        </aside>
    );
}

export default Sidebar;