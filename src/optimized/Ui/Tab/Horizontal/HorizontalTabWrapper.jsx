import style from "../../UiTab.module.css";

const HorizontalTabWrapper = ({ children }) => {
  return <div className={style.horizontal_tab_wrapper}>{children}</div>;
};

export default HorizontalTabWrapper;
