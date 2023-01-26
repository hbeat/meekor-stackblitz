import React, { useState, useEffect } from "react";
import { useLiff } from "react-liff";
import { useParams,useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [billID, setBillID] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setBillID(location.state.billID)
  }, [location.state.billID]);

  console.log(billID)
  return (
    <div>
      <div class="flex flex-col h-full">
        <div class=" w-screen h-32 min-h-1/5 bg-teal-400">
          <h1> ชำระทั้งหมด</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
