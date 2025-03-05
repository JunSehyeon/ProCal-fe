import React from "react";
import { useParams } from "react-router-dom";

const Detailpage = () => {
  const { examType } = useParams();

  return (
    <div>
      <h1>{examType}</h1>
      <p>{examType} 시험에 대한 상세 페이지입니다.</p>
    </div>
  );
};

export default Detailpage;
