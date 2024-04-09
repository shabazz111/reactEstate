import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import apiRequest from "../../lib/apiRequest";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onUserChange = (e) => {
    const { username, email, password } = e.target;
    setUserData((prev) => ({
      ...prev,
      [username]: value,
      [email]: value,
      [password]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await apiRequest.post("/register", userData);
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster></Toaster>
      <div className="registerPage">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <input
              name="username"
              type="text"
              value={userData.username}
              onChange={onUserChange}
              placeholder="Username"
            />
            <input
              name="email"
              type="text"
              value={userData.email}
              onChange={onUserChange}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={onUserChange}
              placeholder="Password"
            />
            <button>Register</button>
            <Link to="/login">Do you have an account?</Link>
          </form>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
