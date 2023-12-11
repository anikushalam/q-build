import style from "../Utils.module.css";
const EmptyMessage = ({
  title,
  subtitle,
  customStyleContainer,
  costomTextTitleStyle,
  costomTextSubtitleStyle,
}) => {
  return (
    <div className={style.empty_container} style={customStyleContainer}>
      {title && <h6 style={costomTextTitleStyle}>{title}</h6>}
      {subtitle && <p style={costomTextSubtitleStyle}>{subtitle}</p>}
    </div>
  );
};

export default EmptyMessage;
