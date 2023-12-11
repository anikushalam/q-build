import React, { useEffect } from "react";
import style from "./SwitchAccount.module.css";
import { Dialog } from "@mui/material";
import { useSwitchUserAccountQuery } from "../../../../services/switchAccount/switchAccountApi";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetActivatedMemberAccount } from "../../../../hooks/member_tab/department-api";
import { useState } from "react";
import QLoader from "../../../../Loader/QLoader";
import QvipleLoading from "../../../../Loader/QvipleLoading";

function Item({ data }) {
  const navigate = useNavigate();
  const params = useParams();
  const id = useSelector((state) => state.idChange.id);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { getActivatedMemberAccountRefetch } = useGetActivatedMemberAccount({
    data: {
      id: id,
      active_member_role: selectedAccount,
    },
    skip: !selectedAccount,
  });
  const onSwitchAccount = (val) => {
    setSelectedAccount(val);
  };
  useEffect(() => {
    if (selectedAccount) {
      setDisabled((pre) => !pre);
      getActivatedMemberAccountRefetch();
      setTimeout(() => {
        navigate(`/q/${params.username}/memberstab`, {
          state: {
            selectedAccount: selectedAccount,
          },
        });
        setDisabled((pre) => !pre);
      }, 1000);
    }
  }, [selectedAccount, getActivatedMemberAccountRefetch]);
  return (
    <>
      {data?.studentFirstName ? (
        <div
          className={style.swichModalItem}
          onClick={() => onSwitchAccount(data?._id)}
        >
          <img
            id="profileImg"
            alt=""
            src={
              data?.institute?.insProfilePhoto
                ? `${imageShowUrl}/${data?.institute?.insProfilePhoto}`
                : data?.student_unit?.hostel_unit_photo
                ? `${imageShowUrl}/${data?.student_unit?.hostel_unit_photo}`
                : data?.studentProfilePhoto
                ? `${imageShowUrl}/${data?.studentProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
          />
          <div className={style.swichModalText}>
            <h6>
              {data?.institute?.insName ??
                `${
                  data?.student_unit?.hostel_unit_name
                    ? `${data?.student_unit?.hostel_unit_name} (Hostel)`
                    : ""
                }` ??
                ""}
            </h6>
            <p>
              {data?.studentFirstName} {data?.studentMiddleName}{" "}
              {data?.studentLastName} {`(student)`}
            </p>
          </div>
        </div>
      ) : data?.staffFirstName ? (
        <div
          className={style.swichModalItem}
          onClick={() => onSwitchAccount(data?._id)}
        >
          <img
            id="profileImg"
            alt=""
            src={
              data?.institute?.insProfilePhoto
                ? `${imageShowUrl}/${data?.institute?.insProfilePhoto}`
                : data?.staffProfilePhoto
                ? `${imageShowUrl}/${data?.staffProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
          />
          <div className={style.swichModalText}>
            <h6>{data?.institute?.insName}</h6>
            <p>
              {data?.staffFirstName} {data?.staffMiddleName}{" "}
              {data?.staffLastName} {`(staff)`}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {disabled && <QLoader />}
    </>
  );
}

const validateSearchCharacter = (account, event) => {
  let accountFullName = account?.studentFirstName
    ? `${account?.studentFirstName} ${
        account?.studentMiddleName ? `${account?.studentMiddleName} ` : ""
      }${account?.studentLastName}`
    : `${account?.staffFirstName} ${
        account?.staffMiddleName ? `${account?.staffMiddleName} ` : ""
      }${account?.staffLastName}`;

  if (
    accountFullName?.toLocaleLowerCase()?.includes(event?.toLocaleLowerCase())
  ) {
    return account;
  } else {
    return null;
  }
};
function SwitchModal() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useSelector((state) => state.idChange.id);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [allAccount, setAllAccount] = useState([]);
  const { data, refetch: switchAccountRefetch } = useSwitchUserAccountQuery(
    id,
    { skip: !id }
  );

  useEffect(() => {
    if (id) {
      setShowingDataLoading(true);
      switchAccountRefetch();
    }
  }, [switchAccountRefetch, id]);

  useEffect(() => {
    if (data?.role_query) {
      setAllAccount(data?.role_query);
      setShowingDataLoading(false);
    } else if (data?.role_query?.length === 0) setShowingDataLoading(false);
    else {
    }
  }, [data?.role_query]);

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterAccount = data?.role_query?.filter((account) =>
        validateSearchCharacter(account, e.target.value)
      );
      setAllAccount(filterAccount);
    } else {
      setAllAccount(data?.role_query);
    }
  };

  //   `/q/${username}/memberstab`
  // navigate(`/q/${res?.data?.user.username}/feed`);

  return (
    <Dialog open={true} onClose={() => navigate(-1)}>
      <div className={style.swichModal}>
        <div className={style.swichModalTop} onClick={() => navigate(-1)}>
          {t("switch_account")}
        </div>
        <div className={style.swichModalBody}>
          <div
            className={style.search_container}
            style={{
              marginBottom: "0.6rem",
            }}
          >
            <div className={style.search_container_text}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder={t("search-label")}
                onChange={onSearchEvent}
                autoFocus={true}
                style={{
                  border: "0.029vw solid rgba(0, 0, 0, 0.15)",
                  width: "370px",
                  marginInline: "0.5rem",
                }}
              />
            </div>
          </div>

          {allAccount?.map((item, index) => (
            <Item data={item} key={index} />
          ))}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
    </Dialog>
  );
}

export default SwitchModal;
