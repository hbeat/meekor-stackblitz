import React, { useState } from "react";
const CashPayPage = () => {
  const [bill,setBill] = useState("bill name");
  const [price,setPrice] = useState(0);
  return (
    <div>
      <div class="flex flex-col h-full">
        <h1>จ่ายด้วยเงินสด</h1>
        <div class="flex w-full">
          <h1 class="w-2/4">{bill}</h1>
          <h1 class="w-2/4">{price} บาท</h1>
        </div>
        <div>
          <button class="w-full" onclick={}>ยืนยันการจ่าย</button>
        </div>
      </div>
    </div>
  );
};

export default CashPayPage;