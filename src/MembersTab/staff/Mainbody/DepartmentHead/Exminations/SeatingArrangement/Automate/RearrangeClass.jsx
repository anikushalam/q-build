import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement.module.css";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const RearrangeClass = ({
  onBack,
  onGrabRearrangeClass,
  clsList,
  class_list,
}) => {
  const { t } = useTranslation();
  const [selectedClasses, setSelectedClasses] = useState(
    class_list?.length ? [...class_list] : []
  );
  const [clsValue, setClsValue] = useState(clsList ?? []);

  //for drag list
  const dragItem = useRef();
  const dragOverItem = useRef();

  React.useEffect(() => {
    if (class_list?.length) {
      setSelectedClasses(class_list?.length ? [...class_list] : []);
    }
    if (clsList) {
      setClsValue(clsList);
    }
  }, [class_list, clsList]);

  const onDragEventStart = (e, position) => {
    dragItem.current = position;
  };

  const onDragEventEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const onDropItem = (e) => {
    //for only ids
    const clsCopy = [...selectedClasses];
    const dragItemContentCls = clsCopy[dragItem.current];
    clsCopy.splice(dragItem.current, 1);
    clsCopy.splice(dragOverItem.current, 0, dragItemContentCls);

    // //for objectof value
    const valCopy = [...clsValue];
    const dragItemContentVal = valCopy[dragItem.current];
    valCopy.splice(dragItem.current, 1);
    valCopy.splice(dragOverItem.current, 0, dragItemContentVal);
    dragItem.current = null;
    dragOverItem.current = null;
    setClsValue(valCopy);
    setSelectedClasses(clsCopy);
  };

  const onNext = () => {
    onGrabRearrangeClass(selectedClasses, clsValue);
  };
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img src="/images/arrow-left-fees-icon.svg" onClick={onBack} alt="" />
        <h6>{t("rearranges_exam_halls")}</h6>
        <button className={style.next_btn} title="Next" onClick={onNext}>
          {t("next")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      {clsValue?.map((cls, index) => (
        <div
          className={style.classes_main_container}
          key={cls._id}
          draggable
          onDragStart={(e) => onDragEventStart(e, index)}
          onDragEnter={(e) => onDragEventEnter(e, index)}
          onDragEnd={onDropItem}
        >
          <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
          <div className={style.with_check_container}>
            <div className={style.person_container_text}>
              <h6>{`${cls?.className ?? ""} ${cls?.classTitle ?? ""}`}</h6>
            </div>
            <div className={style.classes_count_container}>
              <h6>{selectedClasses?.indexOf(cls?._id) + 1}</h6>
              <img
                src="/images/department/equal-rearrange-icon.svg"
                alt="checkbox icon"
                title="Select staff"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RearrangeClass;
