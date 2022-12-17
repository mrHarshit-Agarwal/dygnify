import logo from "./logo.svg";
import "./App.css";

import UserDetails from "./components/UserDetails";
import BusinessDetails from "./components/BusinessDetails";
import LoanDetails from "./components/LoanDetails";
import { useState } from "react";

function App() {
  const [userID, setUserID] = useState("");
  const [bussinessID, setBusinessId] = useState("");
  return (
    <>
      <UserDetails setUserID={setUserID} />
      <BusinessDetails user_id={userID} setBusinessID={setBusinessId} />
      <LoanDetails business_id={bussinessID} />
    </>
  );
}

export default App;
