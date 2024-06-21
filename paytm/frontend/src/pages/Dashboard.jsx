import { useEffect } from "react";
import { Topbar, Users } from "../components";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {

  return (
    <>
      <Topbar />
      <div className="m-5">
        <Users />
      </div>
    </>
  );
};
