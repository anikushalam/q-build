import React, { useEffect } from "react";
import style from "./Details.module.css";
import "./Detail.css";
// import Hashtag from "../../../../../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/components/Hashtag";
import { useGetOneAnnouncementQuery } from "../../../../../../services/qvipleAPI";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import moment from "moment";
import Carousel from "react-material-ui-carousel";
import { imageExtensionVerify } from "../../../../../../utils/image_extenstion";

function Details({ annId }) {
  // const types = ["image/jpeg", "image/png", "image/jpg"];,
  const { data, isFetching, refetch } = useGetOneAnnouncementQuery(annId, {
    skip: !annId,
  });

  useEffect(() => {
    if (annId) {
      refetch();
    }
  }, [annId, refetch]);

  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };

  return (
    <div className={style.details}>
      {isFetching ? (
        <>
          <div className={style.loader}>
            <img src="/images/loader/loader-bg-white.gif" alt="" />
          </div>
        </>
      ) : (
        <>
          <div className={style.eachposthead}>
            <div className={style.imgcontainer}>
              <img
                alt="not found"
                src={
                  data?.announcement?.institute.photoId !== "1"
                    ? `${imageShowUrl}/${data?.announcement?.institute?.insProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
              />
            </div>
            <div className={style.eachpostUserName}>
              <h6>
                {data &&
                  data.announcement &&
                  data.announcement.institute?.insName}
              </h6>
              <div
                className={style.eachpostUserTime}
                style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
              >
                <p>
                  {data &&
                    moment(data.announcement?.createdAt).format("DD-M-YYYY")}
                </p>
                {data?.announcement?.insAnnVisibility === "Private" ? (
                  <img
                    className={style.public}
                    src="/images/post-private-icon.svg"
                    alt="Private"
                  />
                ) : (
                  <img
                    className={style.public}
                    src="/images/privacy-icon.svg"
                    alt="Public"
                  />
                )}
              </div>
            </div>
          </div>
          <div className={style.Container}>
            <p className={style.tille}>
              {data && data.announcement?.insAnnTitle}
            </p>
            <hr />
            <p
              className={style.description}
              style={{
                whiteSpace: "break-spaces",
              }}
            >
              {data && data.announcement?.insAnnDescription}{" "}
            </p>
            <p className={style.description}>
              {/* <div className={style.hashtag}>
            <Hashtag text="naturephotography" />
            <Hashtag text="lake" />
            <Hashtag text="architecture" />
          </div> */}
            </p>

            <div className={style.documentContainer}>
              <Carousel
                className="Example"
                autoPlay={false}
                // animation={"slide"}
                indicators={true}
                // timeout={this.state.timeout}
                // cycleNavigation={true}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={false}
                next={(now, previous) => {}}
                prev={(now, previous) => {}}
                onChange={(now, previous) => {}}
              >
                {data?.announcement.announcementDocument.map((doc) => {
                  if (
                    doc.documentType === "image/jpeg" ||
                    doc.documentType === "image/png" ||
                    imageExtensionVerify(doc?.documentKey)
                  ) {
                    return (
                      <div className={style.anndoc}>
                        <img
                          className={style.selectedImg}
                          src={`${imageShowUrl}/${doc?.documentKey}`}
                          alt={doc?.documentName}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className={style.anndoc}>
                        <a
                          title="Download File"
                          href={`https://d3dqpu54js2vfl.cloudfront.net/${doc?.documentKey}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className={style.selectedImg}
                            src="/images/pdf-icon.png"
                            alt={doc?.documentName}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </a>
                      </div>
                    );
                  }
                })}
              </Carousel>
            </div>

            {/* ======================== Multiple Document ========================== */}
            {/* {data?.announcement?.announcementDocument?.map((dt, index) =>
              types?.includes(`${dt?.documentType}`) ? (
                <div key={index}>
                  <img
                    className={style.selectedImg}
                    src={`${imageShowUrl}/${dt?.documentKey}`}
                    alt={dt?.documentName}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() =>
                    openInNewTab(`${imageShowUrl}/${dt?.documentKey}`)
                  }
                >
                  {dt?.documentName}
                </button>
              )
            )} */}
            {/* =========================== Here ============================== */}
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
