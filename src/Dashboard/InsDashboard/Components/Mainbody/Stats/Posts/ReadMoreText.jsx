import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../../../redux/store/department-slice";
import style from "./PostContainer.module.css";
import { useTranslation } from "react-i18next";

function ReadMoreText({ text, parentStyle }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(true);
  const result = showMore ? text?.substring(0, 200) : text;
  const dispatch = useDispatch();
  return (
    <p className={parentStyle}>
      {result?.split(" ").map((txt, index) =>
        txt.startsWith("@", 0) ? (
          <Link
            to={`/q/${txt.slice(1, txt.length)}/profile`}
            onClick={() => {
              dispatch(
                idChangeAction.searchId({
                  id: txt.slice(1, txt.length),
                  type: "USERNAME",
                })
              );
            }}
            style={{ color: "#436DFA" }}
            key={index}
          >{` ${txt} `}</Link>
        ) : (
          <span key={index}>{` ${txt} `}</span>
        )
      )}
      {showMore && text?.length > 200 ? (
        <span
          className={style.showMore}
          style={{}}
          onClick={() => setShowMore(!showMore)}
        >
          {t("show_more_")}
        </span>
      ) : (
        ""
      )}
    </p>
  );
}
export default ReadMoreText;
