import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../HostelFeeStructure/HostelFeeStructure.module.css";
import QLoader from "../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import { useAddHostelRules } from "../../../../../hooks/member_tab/hostel-api";
import { useFileUpload } from "../../../../../hooks/authentication-api";

const AddRules = ({
  openAs,
  onClose,
  hid,
  openRuleMenu,
  onRefetch,
  onEdit,
}) => {
  const { t } = useTranslation();
  const [addRules, setAddRules] = useState({
    regulation_headline:
      openAs === "EDIT" ? openRuleMenu?.regulation_headline : "",
    regulation_description:
      openAs === "EDIT" ? openRuleMenu?.regulation_description : "",
    regulation_attachment:
      openAs === "EDIT" ? openRuleMenu?.regulation_attachment : "",
  });
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addHostelRules] = useAddHostelRules();
  const [oneFileUpload] = useFileUpload();

  useEffect(() => {
    if (openAs === "EDIT") {
      setAddRules({
        regulation_headline: openRuleMenu?.regulation_headline,
        regulation_description: openRuleMenu?.regulation_description,
        regulation_attachment: openRuleMenu?.regulation_attachment,
      });
    }
  }, [openAs]);

  const onInputChange = (e) => {
    setAddRules((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "regulation_attachment" || obj === "regulation_description") {
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          setAddRules((prev) => ({
            ...prev,
            regulation_attachment: res.data?.imageKey,
          }));
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const onAddHostelRule = () => {
    const validation = onValidation(addRules);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      if (openAs === "EDIT") {
        onEdit(addRules);
      } else {
        setDisabled((pre) => !pre);
        addHostelRules({
          hid: hid,
          addRules: {
            rules: [
              {
                headLine: addRules?.regulation_headline,
                description: addRules?.regulation_description,
                attach: addRules?.regulation_attachment,
              },
            ],
          },
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{openAs === "EDIT" ? t("edit_rule") : t("add_new_rule")}</h6>
          <img
            src="/images/close-post-icon.svg"
            onClick={onClose}
            alt="close"
          />
        </div>
        <JoinFormInput
          labelText={t("rule_headline")}
          placeholder={t("rule_headline_placeholder")}
          name={"regulation_headline"}
          value={addRules?.regulation_headline}
          type={"text"}
          onChange={onInputChange}
          errorShow={filled["regulation_headline"]}
        />
        <JoinFormTextArea
          labelText={t("rules_deacription")}
          placeholder={t("rules_deacription_placeholder")}
          name={"regulation_description"}
          value={addRules.regulation_description}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "100%",
          }}
        />

        <JoinFormFileEdit
          labelText={t("attach_rule_pdf")}
          name={"regulation_attachment"}
          value={addRules.regulation_attachment}
          onChange={onFileUpload}
          customStyleContainer={{
            width: "100%",
          }}
        />
        <button
          className={style.set_fees_structure_btn}
          title="Add Hostel Rules"
          onClick={onAddHostelRule}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("add")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddRules;
