import { useFinanceAddInternalFees } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import CreateButton from "../../../Ui/Button/CreateButton";
import FormInput from "../../../Ui/Input/FormInput";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useState } from "react";
import SelectDepartment from "../Department/SelectDepartment";
import { useTranslation } from "react-i18next";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../Income/Income.module.css";
import {
  existingRequiredField,
  requiredField,
} from "../../../Validation/functions/checkingRequiredField";
import SelectStandard from "../Department/SelectStandard";
const AddInternalFees = ({ fid, onClose }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState("DEPARTMENT");
  const [createFees, setCreateFees] = useState({
    feeName: "",
    feeAmount: "",
    feeDate: "",
  });
  const [errorField, setErrorField] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [department, setDepartment] = useState("");
  const [financeAddInternalFees] = useFinanceAddInternalFees();
  const [clsListId, setClsListId] = useState([]);
  const [clsList, setClsList] = useState([]);
  const onInputChange = (e) => {
    if (e.target.name === "feeAmount") {
      setCreateFees((pre) => ({
        ...pre,
        feeAmount: +e.target.value,
      }));
    } else {
      setCreateFees((pre) => ({
        ...pre,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const onSave = () => {
    if (fid && clsList?.length > 0) {
      let date = new Date();
      let isoDate = date.toISOString();
      let fdate = `${isoDate?.substring(0, 4)}-${isoDate?.substring(
        5,
        7
      )}-${isoDate?.substring(8, 10)}`;
      setDisabled((pre) => !pre);
      financeAddInternalFees({
        fid: fid,
        inernalBody: {
          did: department?._id,
          ClassId: clsList,
          feeName: createFees.feeName,
          feeAmount: createFees.feeAmount,
          feeDate: fdate,
          // ...createFees,
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
  };
  const onAddFees = () => {
    let validation = requiredField(createFees, ["feeDate"]);
    if (existingRequiredField(validation)) {
      onSave();
    } else {
      setErrorField(validation);
    }
  };

  const onSelectDepartment = (val) => {
    setDepartment(val);
    setStep("CLASSES");
  };
  const onSelectStandard = (val) => {
    setClsList(val);
    setStep("");
  };
  // console.info("his", clsList);
  return (
    <>
      {!step ? (
        // <Modal onClose={() => setStep("CLASSES")}>
        <Modal onClose={onClose}>
          <div className={style.modal_container}>
            <UserMemberContentWrapper>
              <div className={style.modal_container_outer_header}>
                <div className={style.modal_container_header}>
                  <h6>{t("create_new_fees")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/close.svg`}
                  alt="close icon"
                  onClick={() => setStep("CLASSES")}
                />
              </div>
            </UserMemberContentWrapper>
            <BorderBottom />
            <UserMemberContentWrapper
              customStyle={{
                paddingTop: "0",
              }}
            >
              <FormInput
                label={t("fees_name")}
                placeholder={t("fees_name_placeholder")}
                name={"feeName"}
                value={createFees.feeName}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["feeName"]}
              />
              <FormInput
                label={t("amount")}
                placeholder={t("amount_placeholder")}
                name={"feeAmount"}
                value={createFees.feeAmount}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["feeAmount"]}
              />
              <CreateButton label="save" onAction={onAddFees} />
            </UserMemberContentWrapper>
            {disabled && <QvipleLoader />}
          </div>
        </Modal>
      ) : step === "DEPARTMENT" ? (
        <SelectDepartment
          onClose={onClose}
          fid={fid}
          onSelect={onSelectDepartment}
        />
      ) : (
        <SelectStandard
          onClose={() => setStep("DEPARTMENT")}
          did={department?._id}
          bid={department?.departmentSelectBatch}
          onSave={onSelectStandard}
          clsListId={clsListId}
          setClsListId={setClsListId}
        />
      )}
    </>
  );
};

export default AddInternalFees;
