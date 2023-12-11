import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./JoinFormSelect.css";
const FormJoinSelect = ({
  selectLabel,
  //   value,
  //   onClick,
  selectedValue,
  options,
  errorShow,
  customStyleContainer,
  customLabelStyle,
  customListStyle,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    isOpen: false,
    value: "",
  });

  const onClickOutsideSelect = (e) => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      setState((prev) => ({
        ...prev,
        isOpen: !prev.isOpen,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutsideSelect);
  }, []);
  const onOpenSelect = () => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const onSelect = (e, opt) => {
    // console.info("this is mewmdf", e.target, opt);
    setState((prev) => ({
      value: e.target.value,
      isOpen: !prev.isOpen,
    }));
  };
  return (
    <div className="form_select_container">
      <div
        className={state.isOpen ? "form_selected_text" : "form_selected_text"}
        onClick={onOpenSelect}
      >
        {selectedValue ?? "Ram is a boy"}
      </div>
      {state.isOpen && (
        <ul className="form_select_options">
          {options.map((option, index) => {
            return (
              <li
                className="form_select_options"
                data-name={option}
                key={index}
                onClick={onSelect}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FormJoinSelect;
