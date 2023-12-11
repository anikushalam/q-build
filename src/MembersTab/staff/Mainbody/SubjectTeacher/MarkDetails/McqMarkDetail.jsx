import React, { useEffect, useState } from "react";
import { useSubjectMcqTestsetAlloted } from "../../../../../hooks/member_tab/subject-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./Markdetails.module.css";
import { useTranslation } from "react-i18next";

function McqMarkDetails({ examView }) {
  const { t } = useTranslation();

  const { subjectMcqTestsetAlloted, subjectMcqTestsetAllotedRefetch } =
    useSubjectMcqTestsetAlloted({
      data: { atsid: examView?._id, page: 1, limit: 50 },
      skip: !examView?._id,
    });
  useEffect(() => {
    if (examView?._id) subjectMcqTestsetAllotedRefetch();
  }, [examView?._id, subjectMcqTestsetAllotedRefetch]);

  // console.info("thisdhfsgfs", subjectMcqTestsetAlloted);
  return (
    <div className={style.markDetails}>
      <div className={style.markDetailsHeader}>
        <h6>
          <span className={style.span}> {t("exam")} : </span>{" "}
          {examView?.testExamName}
        </h6>
      </div>
      <div className={style.markDetailsHeader2}>
        <h6>
          <span className={style.span2}> {t("maximum_marks")} : </span>{" "}
          {examView?.testTotalNumber}
        </h6>
      </div>

      <div className={style.table}>
        <table>
          <thead className={style.thead}>
            <tr className={style.tr}>
              <th className={style.th}>{t("roll_no")}</th>
              <th className={style.th}>{t("name")}</th>
              <th className={`${style.th} ${style.thMargin}`}>{t("ob")}</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {subjectMcqTestsetAlloted?.studentList?.map((stu) => (
              <tr className={style.tr} key={stu?._id}>
                <td className={style.td}>{stu?.studentROLLNO}</td>
                <td className={style.td}>
                  <div className={style.student}>
                    <img
                      src={
                        stu?.studentProfilePhoto
                          ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                      alt=""
                    />
                    <h6>
                      {stu?.studentFirstName}{" "}
                      {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
                      {stu?.studentLastName}
                    </h6>
                  </div>
                </td>
                <td className={style.td}>
                  <input
                    type="number"
                    name="student"
                    defaultValue={stu?.testSet?.[0]?.testObtainMarks}
                    readOnly
                    disabled
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default McqMarkDetails;
