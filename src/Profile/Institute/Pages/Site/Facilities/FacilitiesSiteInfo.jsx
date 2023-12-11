import React, { useEffect, useState } from "react";
import style from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionSiteInfo/AdmissionSiteInfo.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useSelector } from "react-redux";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import {
  useFacilitiesSiteInfo,
  useFacilitiesUpdateSiteInfo,
  useGetFacilitiesSiteInfo,
} from "../../../../../hooks/setting-api";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import JoinFormFilee from "../../../../../JoiningForm/Student/Form/JoinFormFilee";

const FacilitiesSiteInfo = ({ fid, viewAs }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [moduleField, setModuleField] = useState([]);
  const [otherField, setOtherField] = useState({
    post_content: {
      attach: "",
      title: "",
    },
    content: [],
  });

  const id = useSelector((state) => state.idChange.id);
  const [facilitiesInstituteSiteInfo] = useFacilitiesSiteInfo();
  const [updateFacilities] = useFacilitiesUpdateSiteInfo();
  const { getFacilitiesSiteInfo, getFacilitiesSiteInfoRefetch } =
    useGetFacilitiesSiteInfo({
      fid: fid,
      skip: !fid,
    });
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, {
      skip: viewAs === "INSTITUTE" ? true : !id,
    });

  // useEffect(() => {
  //   if (getAcademicSiteInfo?.academic) {
  //     setOtherField({
  //       academic_about: getAcademicSiteInfo?.academic?.academic_about ?? "",
  //       academic_head: getAcademicSiteInfo?.academic?.academic_head ?? "",
  //       academic_photo: getAcademicSiteInfo?.academic?.academic_photo ?? "",
  //       academic_rules: getAcademicSiteInfo?.academic?.academic_rules,
  //       academic_mechanism: getAcademicSiteInfo?.academic?.academic_mechanism,
  //       academic_student_feedback:
  //         getAcademicSiteInfo?.academic?.academic_student_feedback,
  //       academic_ict_faculty:
  //         getAcademicSiteInfo?.academic?.academic_ict_faculty,
  //       academic_peer: getAcademicSiteInfo?.academic?.academic_peer,
  //       academic_development_courses:
  //         getAcademicSiteInfo?.academic?.academic_peer,
  //       academic_results: getAcademicSiteInfo?.academic?.academic_results,
  //       academic_toppers: getAcademicSiteInfo?.academic?.academic_toppers,
  //       academic_student_survey:
  //         getAcademicSiteInfo?.academic?.academic_student_survey,
  //       academic_annual_report:
  //         getAcademicSiteInfo?.academic?.academic_annual_report,
  //       academic_action_plan:
  //         getAcademicSiteInfo?.academic?.academic_action_plan,
  //     });
  //     if (getAcademicSiteInfo?.academic?.academic_calendar?.length) {
  //       let cont = [];
  //       for (let cal of getAcademicSiteInfo?.academic?.academic_calendar) {
  //         let obj = {
  //           calendar_name: cal?.calendar_name,
  //           calendar: cal?.calendar,
  //         };
  //         cont.push(obj);
  //       }
  //       setAcademiCalendar(cont);
  //     }
  //   }
  // }, [getAcademicSiteInfo?.admission_site]);

  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);

  useEffect(() => {
    setOtherField((prevState) => ({
      ...prevState,
      content: moduleField,
    }));
  }, [moduleField]);

  const onBack = () => {
    navigate(-1);
  };

  const onNormalInputChange = (e, index) => {
    if (e.target.name === "title") {
      setOtherField((prevState) => ({
        ...prevState,
        post_content: {
          ...prevState.post_content,
          title: e.target.value,
        },
      }));
    } else {
    }
    const inputarr = [...moduleField];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp][e.target.name] = e.target.value;
      }
    }
    setModuleField(inputarr);
  };
  const onUploadFile = (blb, name, index, arr) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", blb);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        let obj = {
          documentType: "",
          documentName: "",
          documentSize: "",
          documentKey: "",
        };
        obj.documentType = blb.type;
        obj.documentName = blb.name;
        obj.documentSize = blb.size;
        obj.documentKey = res.data?.imageKey;

        arr.push(obj.documentKey);

        setOtherField((prevState) => ({
          ...prevState,
          post_content: {
            ...prevState.post_content,
            attach: obj.documentKey,
          },
        }));

        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onBookPdf = (e, index) => {
    const arr = [];
    if (e.target.files?.length) {
      for (let file in e.target.files) {
        if (typeof e.target.files[file] === "object") {
          onUploadFile(e.target.files[file], e.target.name, index, arr);
        }
      }
    }
  };

  const onAddModule = (fieldName) => {
    setModuleField([
      ...otherField[fieldName],
      { headline: "", headline_content: "" },
    ]);
  };
  const onUpdate = () => {
    setDisabled((pre) => !pre);

    if (fid) {
      updateFacilities({
        fid: fid,
        updateSiteInfo: {
          otherField,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      facilitiesInstituteSiteInfo({
        id: id,
        updateSiteInfo: {
          otherField,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <div className={style.bgContainer}>
      <div className={style.container}>
        <div className={style.containerhead}>
          <h6>{t("update_facilities_info")}</h6>
          <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <div className={style.containercontent}>
          <div className={style.container_inner_content}>
            <h6 style={{ marginTop: "1.5rem" }}>{t("details_facilities")}</h6>
            <div
              className={style.show_field}
              style={{
                alignItems: "flex-start",
              }}
            >
              <JoinFormTextArea
                labelText={t("facilities_title")}
                placeholder={t("facilities_title_placeholder")}
                name={"title"}
                value={otherField.post_content?.title}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "48%",
                }}
              />

              <JoinFormFilee
                acceptType="application/pdf"
                labelText={t("facilities_file")}
                multiple={false}
                onChange={onBookPdf}
                errorShow={false}
                customStyleContainer={{
                  width: "48%",
                }}
                name={"facilities_file"}
                labelname={`facilities_file`}
                value={otherField.post_content.attach}
              />
            </div>

            <h6 style={{ marginTop: "1.5rem" }}>{t("facilities")}</h6>
            <div className={style.add_contact_person}>
              {otherField?.content?.map((item, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("headline")}
                      placeholder={t("headline_placeholder")}
                      name={"headline"}
                      value={item?.headline}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("content")}
                      placeholder={t("content_placeholder")}
                      name={"headline_content"}
                      value={item?.headline_content}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className={style.add_contact_person_btn}
              title="Add Facilities"
              onClick={() => onAddModule("content")}
            >
              {t("add_facility")}
            </button>
          </div>
        </div>

        {disabled && <QLoader />}
        <button className={style.update_btn} onClick={onUpdate}>
          {t("update")}
        </button>
      </div>
    </div>
  );
};

export default FacilitiesSiteInfo;
