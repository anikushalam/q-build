import React, { useState } from "react";
import style from "./CreateEventModal.module.css";
import { Dialog } from "@mui/material";
import { useCreateSportsEvent } from "../../../../../../../../hooks/sports/sports-api";
import LoaderButton from "../../../../../../../../Loader/LoaderButton";
import { useTranslation } from "react-i18next";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "3.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({ eventData, open, onClose, setEventData, setIsOpen }) {
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        <div
          className={style.option}
          onClick={() => {
            setEventData({ ...eventData, sportEventCategory: "Intra" });
            setIsOpen(false);
          }}
        >
          {t("intra")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setEventData({ ...eventData, sportEventCategory: "Inter" });
            setIsOpen(false);
          }}
        >
          {t("inter")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setEventData({
              ...eventData,
              sportEventCategory: "District",
            });
            setIsOpen(false);
          }}
        >
          {t("dist_level")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setEventData({ ...eventData, sportEventCategory: "State Level" });
            setIsOpen(false);
          }}
        >
          {t("state_level")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setEventData({
              ...eventData,
              sportEventCategory: "National Level",
            });
            setIsOpen(false);
          }}
        >
          {t("national_level")}
        </div>
      </div>
    </>
  );
}

function CreateEventModal({
  hideModal,
  openModal,
  sid,
  sportArtsDetailsRefetch,
  refetchStatus,
  setRefetchStatus,
}) {
  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });
  const [createSportsEvent] = useCreateSportsEvent();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false);
  const [formError, setFormError] = useState(false);
  const [eventData, setEventData] = useState({
    file: {},
    sportEventName: "",
    sportEventCategory: "",
    sportEventPlace: "",
    sportEventDate: "",
    sportEventDescription: "",
  });

  const handleImgUpload = (e) => {
    setEventData({ ...eventData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      eventData.file?.name &&
      eventData.sportEventCategory &&
      eventData.sportEventDate &&
      eventData.sportEventDescription &&
      eventData.sportEventName &&
      eventData.sportEventPlace
    ) {
      setLoader(true);
      const formDatas = new FormData();

      formDatas.append("file", eventData.file);
      formDatas.append("sportEventCategory", eventData.sportEventCategory);
      formDatas.append("sportEventDate", eventData.sportEventDate);
      formDatas.append(
        "sportEventDescription",
        eventData.sportEventDescription
      );
      formDatas.append("sportEventName", eventData.sportEventName);
      formDatas.append("sportEventPlace", eventData.sportEventPlace);

      createSportsEvent({
        sid: sid,
        eventData: formDatas,
      }).then((res) => {
        if (res?.data?.message) {
          setLoader(false);
          sportArtsDetailsRefetch();
          setRefetchStatus(true);
          hideModal();
        }
      });
    } else {
      setFormError(true);
    }
  };

  return (
    <Dialog open={openModal}>
      <div className={style.createEventModal}>
        <div className={style.createEventModalTop}>
          <div />
          <h6>{t("create_new_event")}</h6>
          <img
            src="/images/close-post-icon.svg"
            alt=""
            onClick={() => hideModal()}
          />
        </div>
        <div className={style.createEventModalBody}>
          {formError && (
            <p className={style.formError}>{t("fill_all_fields")}</p>
          )}
          <form noValidate onSubmit={handleSubmit}>
            <div className={style.item}>
              <label>{t("event_name")}</label>
              <input
                type="text"
                placeholder={t("please_enter_event_name")}
                value={eventData.sportEventName}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    sportEventName: e.target.value,
                  })
                }
              />
            </div>

            <div className={style.item}>
              <label>{t("event_type")}</label>
              <div className={style.input} style={BUTTON_WRAPPER_STYLES}>
                <div>
                  {eventData.sportEventCategory === "Intra" ? (
                    <h6 onClick={() => setIsOpen(true)}>{t("intra")}</h6>
                  ) : eventData.sportEventCategory === "Inter" ? (
                    <h6 onClick={() => setIsOpen(true)}>{t("inter")}</h6>
                  ) : eventData.sportEventCategory === "District Level" ? (
                    <h6 onClick={() => setIsOpen(true)}>{t("dist_level")}</h6>
                  ) : eventData.sportEventCategory === "State Level" ? (
                    <h6 onClick={() => setIsOpen(true)}>{t("state_level")}</h6>
                  ) : eventData.sportEventCategory === "National Level" ? (
                    <h6 onClick={() => setIsOpen(true)}>
                      {t("national_level")}
                    </h6>
                  ) : (
                    <h6 onClick={() => setIsOpen(true)}>
                      {" "}
                      {t("please_select_the_event_type")}
                    </h6>
                  )}
                  {isOpen ? (
                    <img
                      className={style.up}
                      src="/images/up-triangle-icon.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className={style.down}
                      src="/images/downn-icon.svg"
                      alt=""
                    />
                  )}
                </div>
                <Options
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  setEventData={setEventData}
                  eventData={eventData}
                  setIsOpen={setIsOpen}
                />
              </div>
            </div>

            <div className={style.item}>
              <label>{t("event_date")}</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={eventData.sportEventDate}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    sportEventDate: e.target.value,
                  })
                }
                placeholder={t("select_event_date")}
              />
            </div>

            <div className={style.item}>
              <label>{t("place_of_event")}</label>
              <input
                value={eventData.sportEventPlace}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    sportEventPlace: e.target.value,
                  })
                }
                type="text"
                placeholder={t("please_enter_the_place_of_event")}
              />
            </div>

            <div className={style.item}>
              <label>{t("description")}</label>
              <input
                value={eventData.sportEventDescription}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    sportEventDescription: e.target.value,
                  })
                }
                type="text"
                placeholder={t("enter_some_description_of_event")}
              />
            </div>

            {/* <div className={style.item}>
              <label>Description</label>
             
              <textarea
                className={style.postTextarea}
                type="text"
                required
                // ref={announcementDescriptionRef}
                name="createEventDes"
                placeholder="Enter some description of event"
                value={eventData.sportEventDescription}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    sportEventDescription: e.target.value,
                  })
                }
              />
            </div> */}

            <div className={style.photoflex}>
              {eventData?.file?.name ? (
                <div className={style.addedImg}>{eventData?.file?.name} </div>
              ) : (
                <div>
                  <p className={style.addPhoto}>{t("add_event_photo")}</p>
                </div>
              )}

              <div className={style.addpng}>
                <label htmlFor="img" style={{ cursor: "pointer" }}>
                  <p className={`${style.addPhoto} ${style.blue}`}>
                    {t("add_file_image")}
                  </p>
                </label>
                <input
                  className={style.upload}
                  id="img"
                  name="file"
                  onChange={handleImgUpload}
                  type="file"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <button
              type="submit"
              className={style.btn}
              disabled={loader ? true : false}
            >
              <p>{t("create")}</p>
              {loader && <LoaderButton />}
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
}

export default CreateEventModal;
