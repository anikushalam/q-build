import style from "../UserFeed.module.css";
import { Link, useParams } from "react-router-dom";
const UserDesignationCard = ({
  label,
  url,
  redirectUrl,
  requiredData,
  isSubject,
  isAnchor,
}) => {
  const params = useParams();
  return isAnchor ? (
    <>
      {isSubject ? (
        <a
          href={redirectUrl}
          state={requiredData}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={style.ufu_ud_card}>
            <img src={url} alt="designaction icon" />
            <h6>
              {" "}
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
            </h6>
          </div>
        </a>
      ) : (
        <a
          href={redirectUrl}
          state={requiredData}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={style.ufu_ud_card}>
            <img src={url} alt="designaction icon" />
            <h6>{label}</h6>
          </div>
        </a>
      )}
    </>
  ) : redirectUrl ? (
    <>
      {isSubject ? (
        <Link to={`/${params.username}/${redirectUrl}`} state={requiredData}>
          <div className={style.ufu_ud_card}>
            <img src={url} alt="designaction icon" />
            <h6>
              {" "}
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
            </h6>
          </div>
        </Link>
      ) : (
        <Link to={`/${params.username}/${redirectUrl}`} state={requiredData}>
          <div className={style.ufu_ud_card}>
            <img src={url} alt="designaction icon" />
            <h6>{label}</h6>
          </div>
        </Link>
      )}
    </>
  ) : (
    <div className={style.ufu_ud_card}>
      <img src={url} alt="designaction icon" />
      <h6>{label}</h6>
    </div>
  );
};

export default UserDesignationCard;
