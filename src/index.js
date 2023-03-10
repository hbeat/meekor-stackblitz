import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LiffProvider } from "react-liff";

import "./style.css";
import CreateBillPage from "./createbill/createBillPage.js";
import SeperateBill from "./createbill/seperatebill/seperateBillPage";
import AddAccountPage from "./createbill/addaccount/addAccountPage.js";
import AddPromptpayPage from "./createbill/addaccount/addPromptpay.js";
import SummaryPage from "./summaryPage.js";
import PersonalBillPage from "./paybill/personalBillPage.js";
import PaymentPage from "./paybill/paymentPage.js";
import PayBillPage from "./paybill/payBillPage.js";
import BankTransferPage from "./paybill/bankTransferPage.js";
import QRpayPage from "./paybill/qrPayPage.js";
import CashPayPage from "./paybill/cashPayPage.js";
const liffId = "1657560711-7MgLg4Ld";
const stubEnabled = false;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <LiffProvider liffId={liffId} stubEnabled={stubEnabled}>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        {/* <Route path="/" element={<PersonalBillPage />} /> */}
        {/* <Route path="/" element={<CreateBillPage />} /> */}
        <Route path="/" element={<PayBillPage />} />

        {/* <Route path="/" element={<AddMemberPage />} /> */}
        {/* <Route path="/add_member" element={<AddMemberPage />} /> */}

        <Route path="/separate_bill" element={<SeperateBill />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/add_account" element={<AddAccountPage />} />
        <Route path="/add_promptpay" element={<AddPromptpayPage />} />
        <Route path="/banktransfer" element={<BankTransferPage />} />
        <Route path="/qrpay" element={<QRpayPage />} />
        <Route path="/cashpay" element={<CashPayPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  </LiffProvider>
);
