import style from "./BorderBottom.module.css";
const BorderBottom = ({ customStyleBorder }) => {
  return <hr className={style.split_content} style={customStyleBorder} />;
};

export default BorderBottom;
