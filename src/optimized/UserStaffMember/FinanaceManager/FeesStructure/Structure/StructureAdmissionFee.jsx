import BorderBottom from "../../../../Ui/Border/BorderBottom";
import SetButton from "../../../../Ui/Button/SetButton";
import FormInput from "../../../../Ui/Input/FormInput";
import Modal from "../../../../Ui/Modal/Modal";
import CustomSelect from "../../../../Ui/Select/CustomSelect";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import { useCallback, useEffect, useState } from "react";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";

const StructureAdmissionFee = ({
  structure,
  setStructure,
  setAllInstallment,
  allInstallment,
  setStep,
}) => {
  const { t } = useTranslation();
  const [installmentCount, setInstallmentCount] = useState(
    structure?.total_installments ?? ""
  );
  const [installmentList, setInstallmentList] = useState(allInstallment ?? []);
  const [admissionFees, setAdmissionFees] = useState({
    total_admission_fees: structure?.total_admission_fees ?? "",
    applicable_fees: structure?.applicable_fees ?? "",
  });
  const [errorField, setErrorField] = useState("");

  useEffect(() => {
    setInstallmentCount(structure?.total_installments ?? "");
    setInstallmentList(allInstallment);
    setAdmissionFees({
      total_admission_fees: structure?.total_admission_fees ?? "",
      applicable_fees: structure?.applicable_fees ?? "",
    });
  }, [structure, allInstallment]);

  const onInstallmentCount = useCallback((val) => {
    setInstallmentCount(val);
    const arr = [];
    for (let inst = 1; inst <= val; inst++) {
      arr.push({ fees: "" });
    }
    setInstallmentList(arr);
  }, []);

  const onInstallmentInputAmountHander = (e, index) => {
    const inputarr = [...installmentList];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].fees = +e.target.value;
      }
    }
    setInstallmentList(inputarr);
  };

  const onInputChange = (e) => {
    setAdmissionFees((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  const onSetAdmissionFee = () => {
    const validation = onValidation(
      installmentCount,
      admissionFees,
      installmentList
    );
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setErrorField(validation);
    } else {
      const installment = onAddInstallment(installmentList);
      setStructure((prev) => ({
        ...prev,
        total_admission_fees: +admissionFees.total_admission_fees ?? 0,
        applicable_fees: +admissionFees.applicable_fees ?? 0,
        total_installments: +installmentCount,
        ...installment,
      }));
      setAllInstallment(installmentList);
      setStep(2);
    }
  };
  return (
    <>
      <Modal>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_outer_header}>
              <div className={style.modal_container_header}>
                <h6>{t("admission_fees")}</h6>
              </div>
              <img
                src={`${assestsUserFinanceUrl}/close.svg`}
                alt="close icon"
                onClick={() => setStep(0)}
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
              label={t("total_fees")}
              placeholder={t("enter_one_time_payment")}
              name={"total_admission_fees"}
              value={admissionFees?.total_admission_fees}
              type={"tel"}
              onChange={onInputChange}
              errorShow={errorField["total_admission_fees"]}
            />
            <FormInput
              label={t("applicable_fees")}
              placeholder={t("applicable_fees_placeholder")}
              name={"applicable_fees"}
              value={admissionFees?.applicable_fees}
              type={"tel"}
              onChange={onInputChange}
              errorShow={errorField["applicable_fees"]}
            />
            <CustomSelect
              selectLabel={t("total_installment")}
              selectedValue={t("select_installment")}
              defalutValue={installmentCount}
              onClick={onInstallmentCount}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              errorShow={errorField["installmentCount"]}
            />
            {installmentList?.map((installment, index) => (
              <FormInput
                label={`${t("installment")} ${index + 1}`}
                placeholder={t("Amount")}
                name={`amount${index}`}
                value={installment.fees}
                type={"tel"}
                onChange={(e) => onInstallmentInputAmountHander(e, index)}
                errorShow={errorField[`fees${index}`]}
                key={index}
              />
            ))}
            <SetButton label="set_fee_heads" onAction={onSetAdmissionFee} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
    </>
  );
};

export default StructureAdmissionFee;

const onValidation = (count, admission, installments) => {
  const errors = {};
  if (!count) errors["installmentCount"] = `installmentCount is required!`;
  for (let obj in admission) {
    if (obj === "applicable_fees") {
    } else {
      if (!admission[obj]) errors[obj] = `${obj} is required!`;
    }
  }

  for (let inst = 0; inst < installments?.length; inst++) {
    for (let obj in installments[inst]) {
      if (!installments[inst][obj])
        errors[`${obj}${inst}`] = `${obj} is required!`;
    }
  }
  let installValue = 0;
  for (let inst = 0; inst < installments?.length; inst++) {
    installValue += installments[inst]["fees"];
  }
  if (installValue < admission["total_admission_fees"])
    errors[`total_install_value`] = `* is required!`;
  return errors;
};
const onAddInstallment = (installments) => {
  const obj = {};
  for (let inst = 0; inst < installments?.length; inst++) {
    if (inst === 0) obj["one_installments"] = installments[inst];
    else if (inst === 1) obj["two_installments"] = installments[inst];
    else if (inst === 2) obj["three_installments"] = installments[inst];
    else if (inst === 3) obj["four_installments"] = installments[inst];
    else if (inst === 4) obj["five_installments"] = installments[inst];
    else if (inst === 5) obj["six_installments"] = installments[inst];
    else if (inst === 6) obj["seven_installments"] = installments[inst];
    else if (inst === 7) obj["eight_installments"] = installments[inst];
    else if (inst === 8) obj["nine_installments"] = installments[inst];
    else if (inst === 9) obj["ten_installments"] = installments[inst];
    else if (inst === 10) obj["eleven_installments"] = installments[inst];
    else if (inst === 11) obj["tweleve_installments"] = installments[inst];
    else {
    }
  }
  return obj;
};
