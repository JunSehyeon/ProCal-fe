import React,{useState} from 'react'
import "../styles/Calendar.style.css"

const Calendar = ({selectedDate, setSelectedDate}) => {
  const [date, setDate]=useState(new Date());

  const year=date.getFullYear();
  const month=date.getMonth();

  const firstDay= new Date(year,month,1).getDay();
  const lastDate= new Date(year,month+1,0).getDate();

  const days=[];
  for(let i=0; i<firstDay; i++) days.push("");
  for(let i=1; i<=lastDate; i++) days.push(i);

  const weeks=[];
  for(let i=0; i<days.length;i+=7){
    weeks.push(days.slice(i,i+7));
  }

  const changeMonth=(offset)=>{
    setDate(new Date(year,month+offset,1))
    setSelectedDate(null)
  }

  const handleDateClick=(day)=>{
    if(day){
      setSelectedDate(new Date(year,month,day))
    }
  }

  return (
    <main className="calendar">
      <h1>
        {year}년<span>{month + 1}월</span>
      </h1>
      <div className=''>
        <button onClick={()=>changeMonth(-1)}>◀ 이전달</button>
        <button onClick={()=>setDate(new Date())}>이번달</button>
        <button onClick={()=>changeMonth(1)}>다음달 ▶</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index)=>(
            <tr key={index}>
              {week.map((day,i)=>(
                <td key={i}
                onClick={()=>handleDateClick(day)}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Calendar
