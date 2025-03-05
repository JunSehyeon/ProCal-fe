import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from './components/Calendar';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import './styles/App.css';
import Detailpage from './components/Detailpage';
import Login from './components/Login';

function App() {
  const [selectedDate,setSelectedDate]=useState(new Date());
  
  return (
    <Router>
    <Routes>
      {/* 상세 페이지는 새로운 페이지로 열리도록 설정 */}
      <Route path="/detail/:examType" element={<Detailpage />} />
      <Route path="/login" element={<Login/>}/>
      
      {/* 기본 페이지 */}
      <Route path="/" element={
        <div className="container">
          <Sidebar selectedDate={selectedDate} />
          <div className='main-content'>
            <SearchBar />
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
        </div>
      } />
    </Routes>
  </Router>
  );
}

export default App;
