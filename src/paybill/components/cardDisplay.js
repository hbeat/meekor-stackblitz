import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLiff } from "react-liff";
import DebtCard from "./debtCard.js";

const CardDisplay = () => {
  // TODO getting Line Group ID from the DB

  // Then Get the Bills accoring to Group ID

  // Mocking up the Debt from the Bill

  // If the user id is matched with the debt then pass the value to JSON

  let debtData = [
    {
      owner_id: "1234",
      owner_name: "gade",
      bill: [
        { id: "1234", name: "food", amount: "500" },
        { id: "3213", name: "drink", amount: "1250" },
      ],
    },
    {
      owner_id: "1234",
      owner_name: "creamder",
      bill: [
        { id: "2324", name: "doof", amount: "928" },
        { id: "3213", name: "knird", amount: "53" },
      ],
    },
  ];

  return (
    <div class overflow-y-auto>
      {debtData.map((data) => (
        <DebtCard debtData={data}></DebtCard>
      ))}
    </div>
  );
};

export default CardDisplay;
