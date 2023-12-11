import { useTranslation } from "react-i18next";
import style from "./Income.module.css";
import { useState } from "react";
import { useFinanceAddIncome } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import {
  existingRequiredField,
  requiredField,
} from "../../../Validation/functions/checkingRequiredField";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import TileWrapper from "../../../Ui/Tab/Tile/TileWrapper";
import TileCard from "../../../Ui/Tab/Tile/TileCard";
import FormInput from "../../../Ui/Input/FormInput";
import FormInputSearch from "../../../Ui/Input/FormInputSearch";
import FormTextarea from "../../../Ui/Input/FormTextarea";
import FormFile from "../../../Ui/Input/FormFile";
import CreateButton from "../../../Ui/Button/CreateButton";
import QvipleLoader from "../../../Loader/QvipleLoader";
import PlateformUser from "../../PlateformUser/PlateformUser";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import { transactionMode } from "../../../Constant/Transaction/transaction_constant";

const AddIncome = ({ onClose, fid }) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    incomeAmount: "",
    incomeFrom: "",
    incomeDesc: "",
    incomeAccount: "By Bank",
  });
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [errorField, setErrorField] = useState("");

  const [financeAddIncome] = useFinanceAddIncome();
  const onInputChange = (e) => {
    if (e.target.name === "incomeAmount")
      setState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    else
      setState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  };

  const onTile = (value) => {
    setState((prev) => ({
      ...prev,
      incomeAccount: value,
    }));
  };
  const onFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const onAddIncome = () => {
    let validation = requiredField(state, ["incomeDesc"]);
    if (existingRequiredField(validation)) {
      if (fid) {
        setDisabled((pre) => !pre);
        const formDatas = new FormData();
        formDatas.append("incomeAmount", state.incomeAmount);
        if (selectedId) {
        } else formDatas.append("incomeFrom", state.incomeFrom);
        formDatas.append("incomeDesc", state.incomeDesc);
        formDatas.append("incomeAccount", state.incomeAccount);
        formDatas.append("file", file);
        financeAddIncome({
          fData: formDatas,
          fid: fid,
          user_query: selectedId,
        })
          .then(() => {
            setDisabled((pre) => !pre);
            onClose();
          })
          .catch(() => {
            setDisabled((pre) => !pre);
          });
      }
    } else {
      setErrorField(validation);
    }
  };

  const onSelectUser = (data) => {
    setSelectedId(data?._id);
    setOpenUser(false);
    setState((prevState) => ({
      ...prevState,
      incomeFrom: data?.userLegalName,
    }));
  };

  const onCloseUser = () => {
    setOpenUser((pre) => !pre);
  };
  return (
    <>
      {!openUser ? (
        <Modal onClose={onClose}>
          <div className={style.modal_container}>
            <UserMemberContentWrapper>
              <div className={style.modal_container_outer_header}>
                <div className={style.modal_container_header}>
                  <h6>{t("add_income_receipt")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/close.svg`}
                  alt="close icon"
                  onClick={onClose}
                />
              </div>
            </UserMemberContentWrapper>
            <BorderBottom />
            <UserMemberContentWrapper
              customStyle={{
                paddingTop: "0",
              }}
            >
              <TileWrapper label="select_transaction_mode">
                {transactionMode?.map((tile) => (
                  <TileCard
                    key={tile?.key}
                    tile={tile}
                    onTile={onTile}
                    activeTile={state.incomeAccount}
                  />
                ))}
              </TileWrapper>

              <FormInput
                label={t("amount")}
                placeholder={t("amount_placeholder")}
                name={"incomeAmount"}
                value={state.incomeAmount}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["incomeAmount"]}
              />
              <FormInputSearch
                label={t("from")}
                placeholder={t("from_placeholder")}
                name={"incomeFrom"}
                value={state.incomeFrom}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["incomeFrom"]}
                iconUrl={`${assestsNavbarUrl}/navbar-search.svg`}
                searchLabel="search_and_select"
                onSearchAction={onCloseUser}
              />
              <FormTextarea
                label={t("description")}
                placeholder={t("description_placeholder")}
                name={"incomeDesc"}
                value={state.incomeDesc}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["incomeDesc"]}
              />
              <FormFile
                label={t("acknowlegement_receipt")}
                name={"acknowlegement_receipt"}
                value={
                  file?.name
                    ? {
                        name: file?.name,
                      }
                    : ""
                }
                onChange={onFileUpload}
              />
              <CreateButton label="save_receipt" onAction={onAddIncome} />
            </UserMemberContentWrapper>
            {disabled && <QvipleLoader />}
          </div>
        </Modal>
      ) : (
        <PlateformUser
          onSelectUser={onSelectUser}
          selectedId={selectedId}
          onClose={onCloseUser}
        />
      )}
    </>
  );
};

export default AddIncome;
