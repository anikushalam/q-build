import style from "./Loader.module.css";

const CircleLoading = ({ customStyle }) => {
  return <div className={style.circle_loading} style={customStyle} />;
};

export default CircleLoading;
