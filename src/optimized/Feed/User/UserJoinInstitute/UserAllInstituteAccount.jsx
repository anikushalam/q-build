import BorderBottom from "@/Ui/Border/BorderBottom";
import Modal from "@/Ui/Modal/Modal";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import style from "../../../UserStaffMember/PlateformUser/PlateformUser.module.css";
import { useTranslation } from "react-i18next";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import { useUserMemberAllAccount } from "@/Hooks/ApiHooks/UserMember/user-member-api";
import { useSelector } from "react-redux";
import UserAllInstituteAccountCard from "./UserAllInstituteAccountCard";
import { useEffect, useState } from "react";
import Loading from "@/Loader/Loading";
const UserAllInstituteAccount = ({ onClose, onRefetch }) => {
  const { t } = useTranslation();
  const uid = useSelector((state) => state.baseChange.id);
  const [allAccount, setAllAccount] = useState([]);
  const { userMemberAllAccount, userMemberAllAccountLoading } =
    useUserMemberAllAccount({
      uid: uid,
      skip: !uid,
    });

  useEffect(() => {
    if (userMemberAllAccount?.length > 0) {
      setAllAccount(userMemberAllAccount);
    }
  }, [userMemberAllAccount?.length]);
  const onSearchEvent = (e) => {
    if (e.target.value) {
      let filterData = getFilter(userMemberAllAccount, e.target.value);
      setAllAccount(filterData);
    } else {
      setAllAccount(userMemberAllAccount);
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("switch_account")}</h6>
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
            paddingBottom: "1rem",
          }}
        >
          <div
            className={style.assign_search_container}
            style={{
              marginBottom: "1rem",
            }}
          >
            <input
              type="text"
              placeholder={t("search")}
              className={style.assign_search_input}
              onChange={onSearchEvent}
            />
            <img
              src={`${assestsNavbarUrl}/navbar-search.svg`}
              alt="search icon"
            />
          </div>

          {userMemberAllAccountLoading && <Loading />}

          {allAccount?.map((account) => (
            <UserAllInstituteAccountCard
              account={account}
              key={account?._id}
              onClose={onClose}
              onRefetch={onRefetch}
            />
          ))}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default UserAllInstituteAccount;

const getFilter = (list, search) => {
  return list.filter((val) => {
    let name = "";
    if (val?.staffFirstName) {
      name = `${val?.staffFirstName} ${
        val?.staffMiddleName ? `${val?.staffMiddleName} ` : " "
      }${val?.staffLastName ?? ""}`;
    } else {
      name = `${val?.studentFirstName} ${
        val?.studentMiddleName ? `${val?.studentMiddleName} ` : " "
      }${val?.studentLastName ?? ""}`;
    }
    if (name.includes(search)) {
      return val;
    }
    return null;
  });
};
