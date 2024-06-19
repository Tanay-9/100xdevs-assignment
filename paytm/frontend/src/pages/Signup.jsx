import { useState } from "react";
import {
  Heading,
  Button,
  SubHeading,
  InputBox,
  BottomWarning,
} from "../components";
import axios from "axios";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-slate-300 min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-md md:max-w-lg p-4">
          <div className="rounded-lg bg-white w-full text-center p-6 md:p-8 lg:p-10">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              label={"First Name"}
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputBox
              label={"Last Name"}
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputBox
              label={"Email"}
              placeholder="tanay@gmail.com"
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputBox
              label={"Password"}
              placeholder="123456"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="pt-4">
              <Button onClick={async ()=>{
               const response =  await axios.post('http://localhost:3000/api/v1/user/signup',{
                    firstName,
                    lastName,
                    username,
                    password                    
                })
               localStorage.setItem('token', response.data.token)
               localStorage.setItem('username', username);
               localStorage.setItem('firstName',firstName);
              }} label={"Sign up"} />
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
