import React, { useState } from "react";
import Modal from "../../../../Modal/Modal";
const Idcard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>Idcard</div>
      <Modal
        open={open}
        setOpen={setOpen}
        modalTitle="ID Card Data"
        selectTitle1="Select Department"
        selectTitlePlaceholder1="Computer Engineer"
        selectTitle2="Card Plans"
        selectTitlePlaceholder2="Please select card plans"
      />
    </>
  );
};

export default Idcard;
