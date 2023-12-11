import React, { memo } from "react";
import style from "./CoAttainmentTable.module.css";

const CoAttainmentTableHeadingNested = ({
  isStudent,
  firstRowWidth,
  firstRow,
  sedondRow,
  thirdRow,
}) => {
  console.info("Sdfkjjsdhgfkj", firstRowWidth);
  return (
    <>
      <div className={style.tabel_heading_nested_inner}>
        {isStudent
          ? firstRow?.map((first, index) => (
              <div
                className={style.tabel_nested_text}
                key={index}
                style={{
                  width: index === 0 ? "15rem" : "14rem",
                  border: "0.5px solid #cacaca",
                  fontWeight: isStudent === "TOTAL" ? "600" : "initial",
                }}
              >
                {index === 0 ? (
                  `${first ?? ""}`
                ) : (
                  <div className={style.table_text_inner_center}>
                    {first ?? ""}
                  </div>
                )}
              </div>
            ))
          : firstRow?.map((first, index) => (
              <div
                className={style.tabel_nested_text}
                key={index}
                style={{
                  width:
                    index === 0
                      ? "15rem"
                      : `${firstRowWidth ? firstRowWidth[first] : 0}rem`,
                  border: "0.5px solid #cacaca",
                  // borderBottom: "0.5px solid #cacaca",
                }}
              >
                {first ?? ""}
              </div>
            ))}
      </div>
      {sedondRow?.length > 0 ? (
        <div className={style.tabel_heading_nested_inner}>
          {sedondRow?.map((first, index) => (
            <div
              className={style.tabel_nested_text}
              key={index}
              style={{
                width: index === 0 ? "15rem" : "14rem",
                border: "0.5px solid #cacaca",
              }}
            >
              {first ?? ""}
            </div>
          ))}
        </div>
      ) : null}
      {thirdRow?.length > 0 ? (
        <div className={style.tabel_heading_nested_inner}>
          {thirdRow?.map((first, index) => (
            <div
              className={style.tabel_nested_text}
              key={index}
              style={{
                width: index === 0 ? "15rem" : "14rem",
                border: "0.5px solid #cacaca",
              }}
            >
              {index === 0 ? (
                `${first ?? ""}`
              ) : (
                <div className={style.table_text_inner_center}>
                  {first ?? ""}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default memo(CoAttainmentTableHeadingNested);
