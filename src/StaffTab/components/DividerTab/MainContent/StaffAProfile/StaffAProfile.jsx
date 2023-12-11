import * as React from "react";
import style from "./StaffAProfileView.module.css";
import StaffAProfileView from "./StaffAProfileView";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

export default function StaffAProfile({
  staffId,
  staffList,
  setPage,
  state,
  showingDataLoading,
}) {
  const [sid, setSid] = React.useState(staffId);

  // for the infinit scroll
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (staffId) setSid(staffId);
  }, [staffId]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  return (
    <div className={style.container}>
      <div>
        <div className={style.leftHeadContainer}>
          <div className={style.leftHeadIndex}>
            <p className={style.leftHeadIndexValue}>Index No.</p>
          </div>
          <div className={style.leftHeadName}>
            <p className={style.leftHeadNameValue}>Name</p>
          </div>
        </div>
        <div className={style.leftBodyContainer}>
          {staffList &&
            staffList.map((row, index) =>
              staffList?.length === index + 1 ? (
                <div
                  ref={ref}
                  key={row.staffROLLNO}
                  onClick={() => setSid(row._id)}
                  className={
                    row?._id === sid
                      ? style.stafflistItemactive
                      : style.stafflistItem
                  }
                >
                  <div className={style.leftBodyRow}>
                    <div className={style.leftBodyRowIndex}>
                      <p>{row.staffROLLNO}</p>
                    </div>
                    <div className={style.leftBodyRowDetail}>
                      <div className={style.leftBodyRowImage}>
                        <img
                          src={
                            row?.photoId !== "1"
                              ? `${imageShowUrl}/${row?.staffProfilePhoto}`
                              : "/images/ins_default_profile.svg"
                          }
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={style.leftBodyRowHeadDetail}>
                        <p className={style.leftBodyRowName}>
                          {`${row.staffFirstName} ${
                            row.staffMiddleName ? row.staffMiddleName : ""
                          } ${row.staffLastName}`}
                        </p>
                        <p className={style.leftBodyRowDest}>
                          {row?.recentDesignation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className={style.leftBodyRowBottomBorder}></p>
                </div>
              ) : (
                <div
                  key={row.staffROLLNO}
                  onClick={() => setSid(row._id)}
                  className={
                    row?._id === sid
                      ? style.stafflistItemactive
                      : style.stafflistItem
                  }
                >
                  <div className={style.leftBodyRow}>
                    <div className={style.leftBodyRowIndex}>
                      <p>{row.staffROLLNO}</p>
                    </div>
                    <div className={style.leftBodyRowDetail}>
                      <div className={style.leftBodyRowImage}>
                        <img
                          src={
                            row?.photoId !== "1"
                              ? `${imageShowUrl}/${row?.staffProfilePhoto}`
                              : "/images/ins_default_profile.svg"
                          }
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={style.leftBodyRowHeadDetail}>
                        <p className={style.leftBodyRowName}>
                          {`${row.staffFirstName} ${
                            row.staffMiddleName ? row.staffMiddleName : ""
                          } ${row.staffLastName}`}
                        </p>
                        <p className={style.leftBodyRowDest}>
                          {row?.recentDesignation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className={style.leftBodyRowBottomBorder}></p>
                </div>
              )
            )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
      <div className={style.rightBodyContainer}>
        <StaffAProfileView sid={sid} />
      </div>
    </div>
  );
}
