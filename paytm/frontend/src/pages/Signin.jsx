import { useState } from "react";
import {
  Heading,
  Button,
  SubHeading,
  InputBox,
  BottomWarning,
} from "../components";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export const Signin = () => {
    const navigate = useNavigate();


    const handleSignIn = async () => {
      try {
          const res = await axios.post('http://localhost:3000/api/v1/user/signin', {
              username, 
              password
          });
          console.log(res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('firstName', res.data.firstName);
          navigate('/dashboard');
      } catch (error) {
          if (error.response) {
            console.log(error.response);
              console.error('Error response:', error.response.data.message);
              alert(error.response.data.message);
          } else if (error.request) {
              console.error('Error request:', error.request);
              alert('Network error');
          } else {
              console.error('Error:', error.message);
              alert('Error signing in');
          }
      }
  };


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="bg-slate-300 min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-md md:max-w-lg  p-4">
          <div className="rounded-lg bg-white w-full text-center p-6 md:p-8 lg:p-10">
            <Heading label={"Sign in"} />
            <SubHeading
              label={"Enter your credentials to access your account"}
            />
            <InputBox
              onChange={(e) => setUsername(e.target.value)}
              placeholder="harkirat@gmail.com"
              label={"Email"}
            />
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              label={"Password"}
            />
            <div className="pt-4">
              <Button onClick={handleSignIn} label={"Sign in"} />
            </div>
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
