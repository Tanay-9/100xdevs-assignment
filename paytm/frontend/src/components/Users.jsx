import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const token = localStorage.getItem('token')
    console.log(token);
    const res = await axios.get(
      "http://localhost:3000/api/v1/user/bulk?filter=" + filter,{
        headers: {
            Authorization:"Bearer "+token
          }
        
      }
    );
    // setUsers(res.data.users)
    console.log(res.data);
    const currentUser = localStorage.getItem("username");
    setUsers(res.data.users.filter((u) => u.username !== currentUser));
  };
  return !users ? (
    "on it"
  ) : (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search Users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}