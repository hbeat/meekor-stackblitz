import React, { useState } from "react";
import { useLiff } from "react-liff";
import CardDisplay from "./components/cardDisplay.js";
const PersonalBillPage = () => {
  return (
    <div>
      <div class="flex flex-col h-full">
        <div class=" w-screen h-32 min-h-1/5 bg-teal-400">
          <h1> บิลที่รอจ่าย </h1>
        </div>
        <div>
          <CardDisplay></CardDisplay>
        </div>
      </div>
    </div>
  );
};

export default PersonalBillPage;
