import React, { useState } from "react";
const QRpayPage = () => {
  const [bill, setBill] = useState("bill name");
  const [price, setPrice] = useState(0);
  return (
    <div>
      <div class="flex flex-col h-full">
        <h1>แสกน QR code</h1>
        <div class="flex w-full">
          <h1 class="w-2/4">{bill}</h1>
          <h1 class="w-2/4">{price} บาท</h1>
        </div>
        <div>
          Generated QR code
          <img></img>
        </div>
      </div>
    </div>
  );
};

export default QRpayPage;
