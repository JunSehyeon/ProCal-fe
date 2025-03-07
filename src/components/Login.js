import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("로그인 시도",{email, password});

    if (email==="test@example.com"&&password==="1234"){
      alert("로그인 성공");
      navigate("/");
    }else{
      alert("이메일 또는 비밀번호가 잘못되었습니다")
    }
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='emil'>Email</label>
          <input 
            type='emil'
            id='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input
          type='password'
          id='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
