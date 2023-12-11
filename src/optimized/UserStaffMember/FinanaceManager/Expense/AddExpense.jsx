import { useTranslation } from "react-i18next";
import style from "../Income/Income.module.css";
import Modal from "../../../Ui/Modal/Modal";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import FormInput from "../../../Ui/Input/FormInput";
import FormFile from "../../../Ui/Input/FormFile";
import TileWrapper from "../../../Ui/Tab/Tile/TileWrapper";
import TileCard from "../../../Ui/Tab/Tile/TileCard";
import FormInputSearch from "../../../Ui/Input/FormInputSearch";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import FormTextarea from "../../../Ui/Input/FormTextarea";
import CreateButton from "../../../Ui/Button/CreateButton";
import { useState } from "react";
import QvipleLoader from "../../../Loader/QvipleLoader";
import {
  existingRequiredField,
  requiredField,
} from "../../../Validation/functions/checkingRequiredField";
import { useFinanceAddExpense } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import PlateformUser from "../../../UserStaffMember/PlateformUser/PlateformUser";
import RectangleTabWrapper from "../../../Ui/Tab/Rectangle/RectangleTabWrapper";
import RectangleTabCard from "../../../Ui/Tab/Rectangle/RectangleTabCard";
import { transactionMode } from "../../../Constant/Transaction/transaction_constant";

const AddExpense = ({ onClose, fid }) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    expenseAmount: "",
    expensePaid: "",
    expenseDesc: "",
    expenseAccount: "By Bank",
  });
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [errorField, setErrorField] = useState("");

  const [financeAddExpense] = useFinanceAddExpense();
  const onInputChange = (e) => {
    if (e.target.name === "expenseAmount")
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
      expenseAccount: value,
    }));
  };
  const onFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const onAddExpense = () => {
    let validation = requiredField(state, ["expenseDesc"]);
    if (existingRequiredField(validation)) {
      if (fid) {
        setDisabled((pre) => !pre);
        const formDatas = new FormData();
        formDatas.append("expenseAmount", state.expenseAmount);
        if (selectedId) {
        } else formDatas.append("expensePaid", state.expensePaid);
        formDatas.append("expenseDesc", state.expenseDesc);
        formDatas.append("expenseAccount", state.expenseAccount);
        formDatas.append("file", file);
        financeAddExpense({
          fData: formDatas,
          fid: fid,
          is_inventory: "",
          // is_inventory: activeIndex === 1 ? true : "",
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
      expensePaid: data?.userLegalName,
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
                  <h6>{t("add_expense_receipt")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/close.svg`}
                  alt="close icon"
                  onClick={onClose}
                />
              </div>
            </UserMemberContentWrapper>
            <BorderBottom
              customStyleBorder={{
                marginBottom: "0",
              }}
            />
            <RectangleTabWrapper>
              <RectangleTabCard label="nominal_expenses" isActive />
              <RectangleTabCard label="assets_inventory" />
            </RectangleTabWrapper>
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
                    activeTile={state.expenseAccount}
                  />
                ))}
              </TileWrapper>

              <FormInput
                label={t("amount")}
                placeholder={t("amount_placeholder")}
                name={"expenseAmount"}
                value={state.expenseAmount}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["expenseAmount"]}
              />
              <FormInputSearch
                label={t("paid_to")}
                placeholder={t("paid_to_placeholder")}
                name={"expensePaid"}
                value={state.expensePaid}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["expensePaid"]}
                iconUrl={`${assestsNavbarUrl}/navbar-search.svg`}
                searchLabel="search_and_select"
                onSearchAction={onCloseUser}
              />
              <FormTextarea
                label={t("description")}
                placeholder={t("description_placeholder")}
                name={"expenseDesc"}
                value={state.expenseDesc}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["expenseDesc"]}
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
              <CreateButton label="save_receipt" onAction={onAddExpense} />
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

export default AddExpense;
