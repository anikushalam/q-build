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
import { useFileUpload } from "../../../../../hooks/authentication-api";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import JoinFormSelect from "../../../../../JoiningForm/Student/Form/JoinFormSelect";
import { useAssignSearchStaff } from "../../../../../Post/Institute/Components/search-api";

function GoverningBodySiteInfo({ academicid, viewAs, gid }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useSelector((state) => state.idChange.id);
  const [disabled, setDisabled] = useState(false);
  const [fieldName, setFieldName] = useState("");
  const [otherField, setOtherField] = useState({
    governing_body_objective: "",
    iqac_objective: "",
    college_development_commitee_roles: "",
    academic_monitoring_commitee_objective: "",
    academic_research_commitee_objective: "",
    anti_ragging_commitee_objective: "",
    anti_ragging_monitoring_cell_roles: "",
    national_antiragging_helpline: "",
    anti_ragging_squad_objective: "",
    college_examination_committee_roles: "",
    grievence_redressal_committee_roles: "",
    internal_complaint_committee_roles: "",
    women_redrassel_cell_roles: "",
    student_council_roles: "",
    student_council_responsibilities: "",
    scst_committee_roles: "",
    obc_committee_roles: "",
    disaster_mgt_committee_roles: "",
    food_governing_committee_roles: "",
    ins_innovation_cell_roles: "",
    minority_committee_roles: "",
    earn_learn_roles: "",
    building_committee_roles: "",
    governing_body_committie: [],
    academic_monitoring_commitee: [],
    iqac: [],
    college_development_commitee: [],
    academic_research_commitee: [],
    anti_ragging_commitee: [],
    anti_ragging_monitoring_cell: [],
    anti_ragging_squad: [],
    college_examination_committee: [],
    grievence_redressal_committee: [],
    internal_complaint_committee: [],
    women_redrassel_cell: [],
    student_council: [],
    lmc: [],
    ins_innovation_cell: [],
    scst_committee: [],
    obc_committee: [],
    minority_committee: [],
    disaster_mgt_committee: [],
    earn_learn: [],
    food_governing_committee: [],
    nodal_committee: [],
    building_committee: [],
  });

  const [memberField, setMemberField] = useState([]);

  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, {
      skip: viewAs === "INSTITUTE" ? true : !id,
    });
  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);

  useEffect(() => {
    setOtherField((prevState) => ({
      ...prevState,
      [fieldName]: memberField,
    }));
  }, [memberField, fieldName]);

  const onBack = () => {
    navigate(-1);
  };

  const onNormalInputChange = (e, index) => {
    if (
      e.target.name === "name" ||
      e.target.name === "profession" ||
      e.target.name === "post" ||
      e.target.name === "designation" ||
      e.target.name === "department"
    ) {
      const inputarr = [...memberField];
      for (let inp = 0; inp < inputarr?.length; inp++) {
        if (inp === index) {
          inputarr[inp][e.target.name] = e.target.value;
        }
      }
      setMemberField(inputarr);
    } else {
      setOtherField((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onAddMember = (fieldName) => {
    setFieldName(fieldName);
    setMemberField([
      ...otherField[fieldName],
      {
        name: "",
        profession: "",
        post: "",
        designation: "",
        department: "",
        field: fieldName,
      },
    ]);
  };
  console.info(otherField);

  return (
    <div className={style.bgContainer}>
      <div className={style.container}>
        <div className={style.containerhead}>
          <h6>{t("govenence")}</h6>
          <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
        </div>

        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />

        <div className={style.containercontent}>
          <div className={style.container_inner_content}>
            <h6 style={{ marginTop: "1.5rem" }}>{t("governing_body_")}</h6>
            <JoinFormTextArea
              placeholder={t("about_govt_body_placeholder")}
              name={"governing_body_objective"}
              value={otherField.governing_body_objective}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <h6 style={{ marginTop: "1.5rem" }}>
              {t("govt_body_committiee_members")}
            </h6>
            <div className={style.add_contact_person}>
              {otherField?.governing_body_committie?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("profession")}
                      placeholder={t("enter_profession")}
                      name={"profession"}
                      value={memberField?.profession}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
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
              title="Add Member"
              onClick={() => onAddMember("governing_body_committie")}
            >
              {t("add_member")}
            </button>
            <h6 style={{ marginTop: "1.5rem" }}>{t("iqac")}</h6>
            <JoinFormTextArea
              placeholder={t("about_iqac_objective_placeholder")}
              name={"iqac_objective"}
              value={otherField.iqac_objective}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.add_contact_person}>
              {otherField?.iqac?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
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
              title="Add Member"
              onClick={() => onAddMember("iqac")}
            >
              {t("add_member")}
            </button>
            <h6 style={{ marginTop: "1.5rem" }}>
              {t("college_development_commitee")}
            </h6>
            <JoinFormTextArea
              placeholder={t(
                "about_college_development_commitee_roles_placeholder"
              )}
              name={"college_development_commitee_roles"}
              value={otherField.college_development_commitee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.add_contact_person}>
              {otherField?.college_development_commitee?.map(
                (member, index) => (
                  <div key={index}>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("name")}
                        placeholder={t("enter_name")}
                        name={"name"}
                        value={member?.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormInput
                        labelText={t("profession")}
                        placeholder={t("enter_profession")}
                        name={"profession"}
                        value={memberField?.profession}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("post")}
                        placeholder={t("enter_post")}
                        name={"post"}
                        value={memberField?.post}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              className={style.add_contact_person_btn}
              title="Add Member"
              onClick={() => onAddMember("college_development_commitee")}
            >
              {t("add_member")}
            </button>
            <h6 style={{ marginTop: "1.5rem" }}>
              {t("academic_monitoring_commitee")}
            </h6>
            <JoinFormTextArea
              placeholder={t(
                "about_academic_monitoring_commitee_objective_placeholder"
              )}
              name={"academic_monitoring_commitee_objective"}
              value={otherField.academic_monitoring_commitee_objective}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.add_contact_person}>
              {otherField?.academic_monitoring_commitee?.map(
                (member, index) => (
                  <div key={index}>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("name")}
                        placeholder={t("enter_name")}
                        name={"name"}
                        value={member?.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormInput
                        labelText={t("department")}
                        placeholder={t("department_name_details")}
                        name={"department"}
                        value={memberField?.department}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("post")}
                        placeholder={t("enter_post")}
                        name={"post"}
                        value={memberField?.post}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              className={style.add_contact_person_btn}
              title="Add Member"
              onClick={() => onAddMember("academic_monitoring_commitee")}
            >
              {t("add_member")}
            </button>
            <h6 style={{ marginTop: "1.5rem" }}>
              {t("academic_research_commitee")}
            </h6>
            <JoinFormTextArea
              placeholder={t(
                "about_academic_research_commitee_objective_placeholder"
              )}
              name={"academic_research_commitee_objective"}
              value={otherField.academic_research_commitee_objective}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.add_contact_person}>
              {otherField?.academic_research_commitee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
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
              title="Add Member"
              onClick={() => onAddMember("academic_research_commitee")}
            >
              {t("add_member")}
            </button>
            <h6 style={{ marginTop: "1.5rem" }}>
              {t("anti_ragging_commitee")}
            </h6>
            <JoinFormTextArea
              placeholder={t(
                "about_academic_research_commitee_objective_placeholder"
              )}
              name={"anti_ragging_commitee_objective"}
              value={otherField.anti_ragging_commitee_objective}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.add_contact_person}>
              {otherField?.anti_ragging_commitee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("profession")}
                      placeholder={t("enter_profession")}
                      name={"profession"}
                      value={memberField?.profession}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
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
              title="Add Member"
              onClick={() => onAddMember("anti_ragging_commitee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("anti_ragging_squad")}</h6>
            <JoinFormTextArea
              placeholder={t("anti_ragging_squad_objective")}
              name={"anti_ragging_squad_objective"}
              value={otherField.anti_ragging_squad_objective}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.add_contact_person}>
              {otherField?.anti_ragging_squad?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
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
              title="Add Member"
              onClick={() => onAddMember("anti_ragging_squad")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>
              {t("college_examination_committee")}
            </h6>
            <JoinFormTextArea
              placeholder={t("college_examination_committee_roles")}
              name={"college_examination_committee_roles"}
              value={otherField.college_examination_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.college_examination_committee?.map(
                (member, index) => (
                  <div key={index}>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("name")}
                        placeholder={t("enter_name")}
                        name={"name"}
                        value={member?.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormInput
                        labelText={t("department")}
                        placeholder={t("department_name_details")}
                        name={"department"}
                        value={memberField?.department}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("post")}
                        placeholder={t("enter_post")}
                        name={"post"}
                        value={memberField?.post}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              className={style.add_contact_person_btn}
              title="Add Member"
              onClick={() => onAddMember("college_examination_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>
              {t("grievence_redressal_committee")}
            </h6>
            <JoinFormTextArea
              placeholder={t("grievence_redressal_committee_roles")}
              name={"grievence_redressal_committee_roles"}
              value={otherField.grievence_redressal_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.grievence_redressal_committee?.map(
                (member, index) => (
                  <div key={index}>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("name")}
                        placeholder={t("enter_name")}
                        name={"name"}
                        value={member?.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormInput
                        labelText={t("department")}
                        placeholder={t("department_name_details")}
                        name={"department"}
                        value={memberField?.department}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("post")}
                        placeholder={t("enter_post")}
                        name={"post"}
                        value={memberField?.post}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              className={style.add_contact_person_btn}
              title="Add Member"
              onClick={() => onAddMember("grievence_redressal_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>
              {t("internal_complaint_committee")}
            </h6>
            <JoinFormTextArea
              placeholder={t("internal_complaint_committee_roles")}
              name={"internal_complaint_committee_roles"}
              value={otherField.internal_complaint_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.internal_complaint_committee?.map(
                (member, index) => (
                  <div key={index}>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("name")}
                        placeholder={t("enter_name")}
                        name={"name"}
                        value={member?.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />

                      <JoinFormInput
                        labelText={t("post")}
                        placeholder={t("enter_post")}
                        name={"post"}
                        value={memberField?.post}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              className={style.add_contact_person_btn}
              title="Add Member"
              onClick={() => onAddMember("internal_complaint_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("women_redrassel_cell")}</h6>
            <JoinFormTextArea
              placeholder={t("women_redrassel_cell_roles")}
              name={"women_redrassel_cell_roles"}
              value={otherField.women_redrassel_cell_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.women_redrassel_cell?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("women_redrassel_cell")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("student_council")}</h6>
            <JoinFormTextArea
              placeholder={t("student_council_roles")}
              name={"student_council_roles"}
              value={otherField.student_council_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <JoinFormTextArea
              placeholder={t("student_council_responsibilities")}
              name={"student_council_responsibilities"}
              value={otherField.student_council_responsibilities}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.student_council?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("student_council")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("lmc")}</h6>

            <div className={style.add_contact_person}>
              {otherField?.lmc?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("designation")}
                      placeholder={t("enter_designation")}
                      name={"designation"}
                      value={memberField?.designation}
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
              title="Add Member"
              onClick={() => onAddMember("lmc")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("ins_innovation_cell")}</h6>
            <JoinFormTextArea
              placeholder={t("ins_innovation_cell_roles")}
              name={"ins_innovation_cell_roles"}
              value={otherField.ins_innovation_cell_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.ins_innovation_cell?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
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
              title="Add Member"
              onClick={() => onAddMember("ins_innovation_cell")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("scst_committee")}</h6>
            <JoinFormTextArea
              placeholder={t("scst_committee_roles")}
              name={"scst_committee_roles"}
              value={otherField.scst_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.scst_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("scst_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("obc_committee")}</h6>
            <JoinFormTextArea
              placeholder={t("obc_committee_roles")}
              name={"obc_committee_roles"}
              value={otherField.obc_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.obc_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("obc_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("minority_committee")}</h6>
            <JoinFormTextArea
              placeholder={t("minority_committee_roles")}
              name={"minority_committee_roles"}
              value={otherField.minority_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.minority_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("minority_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>
              {t("disaster_mgt_committee")}
            </h6>
            <JoinFormTextArea
              placeholder={t("disaster_mgt_committee_roles")}
              name={"disaster_mgt_committee_roles"}
              value={otherField.disaster_mgt_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.disaster_mgt_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("disaster_mgt_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("earn_learn")}</h6>
            <JoinFormTextArea
              placeholder={t("earn_learn_roles")}
              name={"earn_learn_roles"}
              value={otherField.earn_learn_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.earn_learn?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("earn_learn")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>
              {t("food_governing_committee")}
            </h6>
            <JoinFormTextArea
              placeholder={t("food_governing_committee_roles")}
              name={"food_governing_committee_roles"}
              value={otherField.food_governing_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.food_governing_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("food_governing_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("nodal_committee")}</h6>

            <div className={style.add_contact_person}>
              {otherField?.nodal_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("nodal_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("building_committee")}</h6>

            <JoinFormTextArea
              placeholder={t("building_committee_roles")}
              name={"building_committee_roles"}
              value={otherField.building_committee_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.building_committee?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("department")}
                      placeholder={t("department_name_details")}
                      name={"department"}
                      value={memberField?.department}
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
              title="Add Member"
              onClick={() => onAddMember("building_committee")}
            >
              {t("add_member")}
            </button>

            <h6 style={{ marginTop: "1.5rem" }}>{t("gender_equality_cell")}</h6>

            <JoinFormTextArea
              placeholder={t("gender_equality_cell_roles")}
              name={"gender_equality_cell_roles"}
              value={otherField.gender_equality_cell_roles}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <div className={style.add_contact_person}>
              {otherField?.gender_equality_cell?.map((member, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={member?.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("post")}
                      placeholder={t("enter_post")}
                      name={"post"}
                      value={memberField?.post}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("designation")}
                      placeholder={t("enter_designation")}
                      name={"designation"}
                      value={memberField?.designation}
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
              title="Add Member"
              onClick={() => onAddMember("gender_equality_cell")}
            >
              {t("add_member")}
            </button>
          </div>
          <button
            className={style.update_btn}
            // onClick={onUpdate}
          >
            {gid ? t("update") : t("add")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoverningBodySiteInfo;
