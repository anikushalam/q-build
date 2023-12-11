import style from "./Loader.module.css";

const QvipleLoader = () => {
  return (
    <div className={style.qviple_loader_backdrop}>
      <div className={style.qviple_loader_container}>
        <div className={style.qviple_loader_rotation} />
      </div>
    </div>
  );
};

export default QvipleLoader;
