import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if (phone.length === 10) {

      localStorage.setItem(
        "user",
        JSON.stringify({ phone })
      );

      navigate("/");
    } else {
      alert("Enter valid phone number");
    }
  };

  return (

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>

      <h2>Login</h2>

      <input
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
};

export default Login;