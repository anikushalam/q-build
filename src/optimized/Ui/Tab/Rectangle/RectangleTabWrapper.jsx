import style from "../../UiTab.module.css";
const RectangleTabWrapper = ({ children }) => {
  return <div className={style.rectangle_tab_wrapper}>{children}</div>;
};

export default RectangleTabWrapper;
