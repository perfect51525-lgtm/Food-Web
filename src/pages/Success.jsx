import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <h1 style={{ color: "green" }}>
        🎉 Order Successful!
      </h1>

      <p>Your food is being prepared.</p>

      <p>Redirecting to Home...</p>

    </div>
  );
};

export default Success;