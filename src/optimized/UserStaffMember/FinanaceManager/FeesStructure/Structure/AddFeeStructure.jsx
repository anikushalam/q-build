import { useEffect, useState } from "react";
import FeeStructureForm from "./FeeStructureForm";
import StructureAdmissionFee from "./StructureAdmissionFee";
import StructureFeeHead from "./StructureFeeHead";
import AddFeeStructurePreview from "./AddFeeStructurePreview";
import { useFinanceAddFeesStructure } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../../Loader/QvipleLoader";

const AddFeeStructure = ({
  onClose,
  did,
  fid,
  instituteId,
  openAs,
  onEdit,
  openStructureMenu,
}) => {
  const [step, setStep] = useState(0);
  const [structure, setStructure] = useState({
    structure_name: "",
    category_master: "",
    class_master: "",
    batch_master: "",
    total_admission_fees: "",
    applicable_fees: "",
    total_installments: "",
  });
  const [allInstallment, setAllInstallment] = useState([]);
  const [feeHead, setFeeHead] = useState([]);
  const [feeHeadAmount, setFeeHeadAmount] = useState(0);
  const [financeAddFeesStructure] = useFinanceAddFeesStructure();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (openAs === "EDIT") {
      setStructure((prev) => ({
        ...prev,
        structure_name: openStructureMenu?.structure_name ?? "",
        category_master: openStructureMenu?.category_master ?? "",
        class_master: openStructureMenu?.class_master ?? "",
        batch_master: openStructureMenu?.batch_master ?? "",
        total_admission_fees: openStructureMenu?.total_admission_fees ?? "",
        applicable_fees: openStructureMenu?.applicable_fees ?? "",
        total_installments: openStructureMenu?.total_installments ?? "",
      }));
      let fHeads = [];
      let amo = 0;
      for (let head of openStructureMenu?.fees_heads) {
        let obj = {
          created_at: head?.created_at,
          head_amount: head?.head_amount,
          head_name: head?.head_name,
          master: head?.master,
          _id: head?._id,
        };
        fHeads.push(obj);
        amo += head?.head_amount;
      }
      setFeeHead(fHeads);
      setFeeHeadAmount(amo);
      let install = getAllInstallment(openStructureMenu);
      setAllInstallment(install);
    }
  }, [openStructureMenu]);
  const onCreate = (asEdit) => {
    if (openAs === "EDIT") {
      onEdit(
        {
          ...structure,
          structure_name: structure?.structure_name,
          category_master: structure?.category_master?._id,
          class_master: structure?.class_master?._id,
          batch_master: structure?.batch_master?._id,
          total_admission_fees: structure?.total_admission_fees,
          applicable_fees: structure?.applicable_fees,
          total_installments: structure?.total_installments,
          heads: feeHead,
        },
        asEdit
      );
    } else {
      if (fid && did) {
        setDisabled((pre) => !pre);
        financeAddFeesStructure({
          fid: fid,
          flow: "Finance_Manager",
          createFeesStructure: {
            ...structure,
            structure_name: structure?.structure_name,
            category_master: structure?.category_master?._id,
            class_master: structure?.class_master?._id,
            batch_master: structure?.batch_master?._id,
            total_admission_fees: structure?.total_admission_fees,
            applicable_fees: structure?.applicable_fees,
            total_installments: structure?.total_installments,
            heads: feeHead,
            did: did,
          },
        })
          .then(() => {
            setDisabled((pre) => !pre);
            onClose();
          })
          .catch(() => {
            setDisabled((pre) => !pre);
          });
      }
    }
  };
  // console.info("openStructureMenu", allInstallment);
  return (
    <>
      {step === 0 ? (
        <FeeStructureForm
          onClose={onClose}
          did={did}
          fid={fid}
          instituteId={instituteId}
          structure={structure}
          setStructure={setStructure}
          setStep={setStep}
        />
      ) : step === 1 ? (
        <StructureAdmissionFee
          structure={structure}
          setAllInstallment={setAllInstallment}
          setStructure={setStructure}
          setStep={setStep}
          allInstallment={allInstallment}
        />
      ) : step === 2 ? (
        <StructureFeeHead
          structure={structure}
          feeHead={feeHead}
          setFeeHead={setFeeHead}
          setStep={setStep}
          setFeeHeadAmount={setFeeHeadAmount}
          feeHeadAmount={feeHeadAmount}
          allInstallment={allInstallment}
          fid={fid}
        />
      ) : step === 3 ? (
        <AddFeeStructurePreview
          structure={structure}
          feeHead={feeHead}
          allInstallment={allInstallment}
          setStep={setStep}
          feeHeadAmount={feeHeadAmount}
          onClose={() => setStep(2)}
          onCreate={onCreate}
          openAs={openAs}
        />
      ) : null}
      {disabled && <QvipleLoader />}
    </>
  );
};

export default AddFeeStructure;

const getAllInstallment = (openStructureMenu) => {
  let install = [];
  if (openStructureMenu?.one_installments?.fees) {
    install.push({
      fees: openStructureMenu?.one_installments?.fees,
    });
  }
  if (openStructureMenu?.two_installments?.fees) {
    install.push({
      fees: openStructureMenu?.two_installments?.fees,
    });
  }
  if (openStructureMenu?.three_installments?.fees) {
    install.push({
      fees: openStructureMenu?.three_installments?.fees,
    });
  }
  if (openStructureMenu?.four_installments?.fees) {
    install.push({
      fees: openStructureMenu?.four_installments?.fees,
    });
  }
  if (openStructureMenu?.five_installments?.fees) {
    install.push({
      fees: openStructureMenu?.five_installments?.fees,
    });
  }
  if (openStructureMenu?.six_installments?.fees) {
    install.push({
      fees: openStructureMenu?.six_installments?.fees,
    });
  }
  if (openStructureMenu?.seven_installments?.fees) {
    install.push({
      fees: openStructureMenu?.seven_installments?.fees,
    });
  }
  if (openStructureMenu?.eight_installments?.fees) {
    install.push({
      fees: openStructureMenu?.eight_installments?.fees,
    });
  }
  if (openStructureMenu?.nine_installments?.fees) {
    install.push({
      fees: openStructureMenu?.nine_installments?.fees,
    });
  }
  if (openStructureMenu?.ten_installments?.fees) {
    install.push({
      fees: openStructureMenu?.ten_installments?.fees,
    });
  }
  if (openStructureMenu?.eleven_installments?.fees) {
    install.push({
      fees: openStructureMenu?.eleven_installments?.fees,
    });
  }
  if (openStructureMenu?.tweleve_installments?.fees) {
    install.push({
      fees: openStructureMenu?.tweleve_installments?.fees,
    });
  }
  return install;
};
