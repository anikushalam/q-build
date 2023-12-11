import { memo } from "react";
import style from "../../UiTab.module.css";
import { Link, useParams } from "react-router-dom";

const DesignationTabCard = ({
  label,
  iconUrl,
  requiredData,
  pathUrl,
  isSubject,
}) => {
  const params = useParams();

  return (
    <>
      {isSubject ? (
        <Link
          to={`/${params.username}/member/staff/${pathUrl}`}
          className={style.designation_tab_card}
          state={requiredData}
        >
          <img src={iconUrl} alt="designation icon" />
          <p>
            {label?.subjectName}{" "}
            {label?.selected_batch_query?.batchName ? (
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                }}
              >
                {" "}
                ({label?.subject_category === "Practical" ? "P:" : "T:"}
                {label?.selected_batch_query?.batchName})
              </span>
            ) : null}{" "}
            {label?.class?.classTitle} {" - "}
            {label?.class?.batch?.batchName}
          </p>
        </Link>
      ) : (
        <Link
          to={`/${params.username}/member/staff/${pathUrl}`}
          className={style.designation_tab_card}
          state={requiredData}
        >
          {/* <div className={style.designation_tab_card}> */}
          <img src={iconUrl} alt="designation icon" />
          <p>{label}</p>
          {/* </div> */}
        </Link>
      )}
    </>
  );
};

export default memo(DesignationTabCard);
