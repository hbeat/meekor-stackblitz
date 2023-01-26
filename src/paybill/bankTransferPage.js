import React, { useState } from "react";
const BankTransferPage = () => {
  const [bill,setBill] = useState("bill name");
  const [price,setPrice] = useState(0);
  return (
    <div>
      <div class="flex flex-col h-full">
        <h1>ส่งสลิป</h1>
        <div class="flex w-full">
          <h1 class="w-2/4">{bill}</h1>
          <h1 class="w-2/4">{price} บาท</h1>
        </div>
        <div>QR UPLOAD Image
          <img></img>
        </div>
        <div>
          <button class="w-full" onclick={}>อัพโหลดรูป slip</button>
        </div>
      </div>
    </div>
  );
};

export default BankTransferPage;