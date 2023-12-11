import React, { useEffect } from "react";
import style from "./StudentRequest.module.css";
import StudentProfile from "./StudentProfile";
import { useState } from "react";
import { useClassAllRequestStudent } from "../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";

function StudentRequest({ cid, id, did, bid }) {
  const { t } = useTranslation();
  const [requestProfile, setRequestProfile] = useState(false);
  const [sudentId, setSudentId] = useState("");

  const { classAllRequestStudent, classAllRequestStudentRefetch } =
    useClassAllRequestStudent({
      cid: cid,
      page: 1,
      limit: 30,
    });

  useEffect(() => {
    if (cid) classAllRequestStudentRefetch();
  }, [cid, classAllRequestStudentRefetch]);

  const viewDetails = (val) => {
    setSudentId(val);
    setRequestProfile(true);
  };
  // console.info("THis is class Request of student ", classAllRequestStudent);
  return (
    <>
      <div className={`row ${style.sRequest}`}>
        <div className={!requestProfile ? "col-12" : "col-4"}>
          <div className={style.requestParent}>
            <div className={style.requestAction}>
              <span className="mx-1">
                <img
                  src="/images/action-pending.svg"
                  title="Request"
                  className="mx-1"
                  alt="Request"
                />
                {t("action_pending")}
              </span>
              <span className="mx-1">
                {classAllRequestStudent?.classes?.student?.length}
              </span>
            </div>

            <>
              <div className={style.requestStudent}>
                {classAllRequestStudent?.classes?.student?.map((stu) => (
                  <div
                    key={stu?._id}
                    onClick={() => viewDetails(stu._id)}
                    className={
                      sudentId === stu?._id
                        ? `${style.activeRequest}`
                        : `${style.deactiveRequest}`
                    }
                  >
                    <div className={style.requestStudentChild}>
                      <img
                        src={
                          stu?.studentProfilePhoto
                            ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                        alt="Avatar"
                      />
                      <div className={style.applyNameDate}>
                        <p className={style.applyName}>
                          {stu?.studentFirstName}{" "}
                          {stu?.studentMiddleName
                            ? stu?.studentMiddleName
                            : " "}{" "}
                          {stu?.studentLastName}
                        </p>

                        <p className={style.applyDate}>23-02-2022</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        </div>
        {requestProfile && (
          <div className={`col-8 ${style.requestRightParent}`}>
            <StudentProfile
              onRefetch={classAllRequestStudentRefetch}
              setRequestProfile={setRequestProfile}
              sid={sudentId}
              cid={cid}
              id={id}
              bid={bid}
              did={did}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default StudentRequest;
