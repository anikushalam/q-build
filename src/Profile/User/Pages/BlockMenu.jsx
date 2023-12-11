import React, { useState } from "react";
import Overlay from "../../../Search/Overlay";
import SearchModalBackdrop from "../../../Search/SearchModalBackdrop";
import style from "../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import { useTranslation } from "react-i18next";
import {
  useBlockUserByUser,
  useUnblockUserByUser,
  useReportAccountUserToUser,
} from "../../../Post/Institute/Components/post-api";
import QLoader from "../../../Loader/QLoader";
const BlockMenu = ({
  onClose,
  userId,
  onSearchRefetch,
  loginUserId,
  blockedBy,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [blockUserByUser] = useBlockUserByUser();
  const [unblockUserByUser] = useUnblockUserByUser();
  const [reportAccountUserToUser] = useReportAccountUserToUser();

  const onBlockUser = () => {
    setDisabled(true);
    blockUserByUser({
      blockId: userId,
    })
      .then(() => {
        onSearchRefetch();
        setDisabled(false);
        onClose();
      })
      .catch({});
  };

  const onUnblockUser = () => {
    setDisabled(true);
    unblockUserByUser({
      blockId: userId,
    })
      .then(() => {
        onSearchRefetch();
        // oneInstituteProfileRefetch();
        setDisabled(false);
        onClose();
      })
      .catch({});
  };

  const onReportAccount = () => {
    setDisabled(true);
    reportAccountUserToUser({
      rid: userId,
      id: loginUserId,
      accountStatus: "Malicious",
    })
      .then(() => {
        setDisabled(false);
        onClose();
      })
      .catch({});
  };
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "200px" }}>
          {blockedBy?.includes(loginUserId) ? (
            <h6 className={style.edit} onClick={onUnblockUser}>
              {t("unblocked")} {t("account")}
            </h6>
          ) : (
            <h6 className={style.edit} onClick={onBlockUser}>
              {t("block")} {t("account")}
            </h6>
          )}
          <h6 className={style.remove} onClick={onReportAccount}>
            {t("report_acount")}
          </h6>
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default BlockMenu;
