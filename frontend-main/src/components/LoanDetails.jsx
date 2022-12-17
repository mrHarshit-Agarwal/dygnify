import React, { useState } from "react";
import axios from "axios";
const LoanDetails = ({ business_id }) => {
  const [msg, setMsg] = useState(null);
  const [loan, setLoan] = useState({
    loan_amount: 0,
    interest_rate: 0,
    loan_tenure: 0,
    aadhar_number: 0,
    use_of_loan: "",
    business_id: "639df54984cc0152c3e94b77",
  });

  const changeInput = (e) => {
    setLoan(() => {
      return {
        ...loan,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = async () => {
    const body = loan;
    body.business_id = business_id;
    try {
      const res = await axios.post(
        "http://localhost:8080/api/loan/loan_detail",
        body
      );
      setMsg("Loan Application Submitted..");
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  return (
    <>
      {msg && <h3>{msg}</h3>}
      <br />
      <br />
      <label htmlFor="loan_amount">loan amount</label>
      <input
        type="number"
        name="loan_amount"
        value={loan.loan_amount}
        onChange={changeInput}
        min="100000"
      />
      <br />
      <br />
      <label htmlFor="interest_rate">rate of interest</label>
      <input
        type="number"
        name="interest_rate"
        value={loan.interest_rate}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="loan_tenure">loan tenure</label>
      <input
        type="number"
        name="loan_tenure"
        value={loan.loan_tenure}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="aadhar number">enter your aadhar</label>
      <input
        type="number"
        name="aadhar_number"
        value={loan.aadhar_number}
        onChange={changeInput}
      />
      <br />
      <br />
      <label htmlFor="use_of_loan">why you want loan</label>
      <select name="use_of_loan" onChange={changeInput}>
        <option value={"business"}>Business</option>
        <option value={"investment"}>Investment</option>
        <option value="other">Other</option>
      </select>
      <br />
      <br />
      <button onClick={submitForm}>Submit</button>
    </>
  );
};

export default LoanDetails;
