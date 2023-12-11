import React, { useState } from "react";
import AllAdmissionAccepted from "./Admission/AllAdmissionAccepted";
import AllAdmissionRejected from "./Admission/AllAdmissionRejected";
import AllAdmissionRequest from "./Admission/AllAdmissionRequest";
import Tabbs from "./Tabs/Tabs";

const AdmissionRequest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && <AllAdmissionRequest />}
      {activeIndex === 1 && <AllAdmissionAccepted />}
      {activeIndex === 2 && <AllAdmissionRejected />}
    </>
  );
};

export default AdmissionRequest;
