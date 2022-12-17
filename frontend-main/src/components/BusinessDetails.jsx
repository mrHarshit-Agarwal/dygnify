import React, { useState } from "react";
import axios from "axios";

const BusinessDetails = ({ user_id, setBusinessID }) => {
  const [msg, setMsg] = useState(null);
  const [business, setBusiness] = useState({
    name: "",
    gst_no: "",
    address: "",
    contact: "",
    user_id: "",
    annual_income: 0,
  });

  const changeInput = (e) => {
    setBusiness(() => {
      return {
        ...business,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = async () => {
    const body = business;
    body.contact = parseInt(business.contact);
    body.user_id = user_id;
    try {
      const res = await axios.post(
        "http://localhost:8080/api/business/business_detail",
        body
      );
      setBusinessID(res.data.data._id);
      setMsg("Business Created Successfully..");
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  return (
    <>
      {msg && <h3>{msg}</h3>}
      <br />
      <br />
      <label htmlFor="name">name of business</label>
      <input
        type="text"
        name="name"
        value={business.name}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="gst_no">enter gst number</label>
      <input
        type="text"
        name="gst_no"
        value={business.gst_no}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="address">enter address</label>
      <input
        type="text"
        name="address"
        value={business.address}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="annual_income">enter income details</label>
      <input
        type="number"
        name="annual_income"
        value={business.annual_income}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="contact">enter contact number</label>
      <input
        type="text"
        name="contact"
        value={business.contact}
        onChange={changeInput}
      />
      <br />
      <br />
      <button onClick={submitForm}>Submit</button>
    </>
  );
};

export default BusinessDetails;
