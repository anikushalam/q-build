import style from "../../UiTab.module.css";
const SquareTabWrapper = ({ children }) => {
  // useEffect(() => {
  //   let doc = document.getElementById("tab_id").clientWidth;
  //   console.info("sdnbfhjsfbm,d", doc);
  // }, []);
  return <div className={style.square_tab_wrapper}>{children}</div>;
};

export default SquareTabWrapper;
