import axios from "axios";
import React, { useState } from "react";

const UserDetails = ({ setUserID }) => {
  const [msg, setMsg] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    mobile_no: "",
  });

  const changeInput = (e) => {
    setUser(() => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = async () => {
    const body = user;
    body.mobile_no = parseInt(user.mobile_no);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/person_detail",
        body
      );
      setUserID(res.data.data._id);
      setMsg("User Created Successfully..");
    } catch (error) {
      console.log(error.response.data.message);
      setMsg(error.response.data.message);
    }
  };

  return (
    <>
      {msg && <h3>{msg}</h3>}
      <label htmlFor="first_name">first name</label>
      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="last_name">last name</label>
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="age">age</label>
      <input type="number" name="age" value={user.age} onChange={changeInput} />
      <br />
      <br />
      <label htmlFor="mabile_no">mobile number</label>
      <input
        type="text"
        name="mobile_no"
        value={user.mobile_no}
        onChange={changeInput}
      />
      <br />
      <br />
      <button onClick={submitForm}>Submit</button>
    </>
  );
};

export default UserDetails;
