import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLiff } from "react-liff";

const DebtCard = ({ debtData }) => {
  let owner = debtData.owner_name;
  const [billID, setBillID] = useState([]);
  const navigate = useNavigate();
  let checkbox_id = 0;

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setBillID([
        ...billID,
        {
          id: debtData.bill[value].id,
          amount: debtData.bill[value].amount,
        },
      ]);
    } else {
      console.log("state changed");
      setBillID(
        billID.filter((a) => a.id !== debtData.bill[value].id) //removed uncheck element
      );
    }
  };

  const goToPayment = () => {
    navigate("/payment", { state: { billID } });
  };

  //Creating UL list components
  let bill_list = debtData.bill.map((bill) => (
    <ul>
      <div class="block">
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="w-6 h-6 rounded"
              value={checkbox_id++}
              onChange={handleChange}
            />
            {bill.name} {bill.amount}
          </label>
        </div>
      </div>
    </ul>
  ));

  useEffect(() => {
    console.log(billID);
  }, [billID]);

  return (
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{owner}</div>
            <div>{bill_list}</div>
            <div>
              <button
                class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                onClick={goToPayment}
              >
                จ่ายเงิน
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DebtCard;