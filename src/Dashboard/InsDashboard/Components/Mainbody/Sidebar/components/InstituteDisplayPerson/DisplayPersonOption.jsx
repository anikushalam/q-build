import React, { useEffect, useRef, useState } from "react";
import CustomSuspense from "../../../../../../../Custom/SuspenseLoading/CustomSuspense";
import style from "../SidebarBottom.module.css";
import { useTranslation } from "react-i18next";

const EditDisplay = React.lazy(() =>
  import("../../../../../Modals/DisplayPerson/EditDisplay")
);
const DeleteDisplay = React.lazy(() =>
  import("../../../../../Modals/DisplayPerson/DeleteDisplay")
);

const DisplayPersonOption = ({
  closeTooltip,
  refetch,
  name,
  dsignation,
  displayUserId,
  userId,
  closeMenu,
}) => {
  const [editDisplay, setEditDisplay] = useState(false);
  const [deleteDisplay, setDeleteDisplay] = useState(false);
  const ref = useRef(null);
  const { t } = useTranslation();
  const handleClickOutside = (e) => {
    if (e.target.id !== "edlit" && e.target.style.zIndex !== "58") {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.profileToolTip}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        <div
          id="edlit"
          style={{ zIndex: "33" }}
          ref={ref}
          onClick={() => setEditDisplay(true)}
        >
          {t("edit_display")}
        </div>
        <div
          style={{ zIndex: "33" }}
          id="edlit"
          ref={ref}
          onClick={() => setDeleteDisplay(true)}
        >
          {t("remove_display")}
        </div>
      </div>
      <CustomSuspense>
        {editDisplay && (
          <EditDisplay
            hideModal={(w) => setEditDisplay(w)}
            editDisplay={editDisplay}
            name={name}
            dsignation={dsignation}
            displayUserId={displayUserId}
            userId={userId}
            refetch={refetch}
          />
        )}
        {deleteDisplay && (
          <DeleteDisplay
            hideModal={(w) => setDeleteDisplay(w)}
            deleteDisplay={deleteDisplay}
            displayUserId={displayUserId}
            userId={userId}
            closeTooltip={closeTooltip}
            refetch={refetch}
          />
        )}
      </CustomSuspense>
    </div>
  );
};

export default DisplayPersonOption;
