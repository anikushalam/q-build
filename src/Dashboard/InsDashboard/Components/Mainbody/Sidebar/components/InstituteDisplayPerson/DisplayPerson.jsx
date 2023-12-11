import React, { useState } from "react";
import Avatar from "../../../../../../../Custom/Avatar/Avatar";
import CustomSuspense from "../../../../../../../Custom/SuspenseLoading/CustomSuspense";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "../SidebarBottom.module.css";
const DisplayPersonOption = React.lazy(() => import("./DisplayPersonOption"));

const DisplayPerson = ({ onRefetchDisplayList, display, isMenu }) => {
  const [click, setClick] = useState(false);
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className={style.item}>
      <Avatar
        dynamicImage={
          display.displayUser?.profilePhoto
            ? `${imageShowUrl}/${display.displayUser?.profilePhoto}`
            : "/images/member_tab/class/default_avatar.svg"
        }
      />
      <div className={style.itemText}>
        <h6>{display?.displayTitle}</h6>
        <p>{display?.displayUser?.userLegalName}</p>
      </div>
      {isMenu ? (
        <img
          alt="not found"
          className={style.dots}
          src="/images/menu-dots-icon.svg"
          title="Menu"
          onClick={() => setClick(!click)}
        />
      ) : null}

      <CustomSuspense>
        {click && (
          <DisplayPersonOption
            closeTooltip={(w) => setClick(w)}
            name={display?.displayUser?.userLegalName}
            dsignation={display?.displayTitle}
            displayUserId={display?._id}
            userId={display?.displayUser._id}
            refetch={onRefetchDisplayList}
            closeMenu={closeMenu}
          />
        )}
      </CustomSuspense>
    </div>
  );
};

export default DisplayPerson;
