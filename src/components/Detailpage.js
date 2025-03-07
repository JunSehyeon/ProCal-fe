import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Detailpage.style.css"

const Detailpage = () => {
  const { examType } = useParams();

  return (
    <div className="detailpage">
      <h1 className="detailpage-examtitle">{examType}</h1>
      <Link to="#" className="detailpage-examlink">{examType} 시험 신청 사이트 바로가기</Link>

      <p>시험후기</p>
      <p>시험 TIP</p>
    </div>
  );
};

export default Detailpage;
