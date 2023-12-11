import { useCallback, useEffect, useState } from "react";
import NotifyOverlay from "./NotifyOverlay";
import style from "../Utils.module.css";

const variantType = {
  success: "green",
  error: "#ed4a4a",
  warning: "orange",
};
const NotifyEvent = ({ eventState, eventStateHandler }) => {
  if (!eventState?.open) return null;
  const [isHide, setIsHide] = useState(false);
  const onClose = useCallback(() => {
    setIsHide(true);
    let animationTimeout = setTimeout(() => {
      eventStateHandler((prev) => ({
        ...prev,
        open: false,
        msg: "",
        variant: "success",
      }));
    }, 500);
    return () => clearTimeout(animationTimeout);
  }, [eventStateHandler]);

  useEffect(() => {
    let identifire = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(identifire);
    };
  }, [onClose]);

  return (
    <NotifyOverlay
      onClose={onClose}
      isVariant={variantType[eventState?.variant]}
      isHide={isHide}
    >
      <h6 className={style.notify_message}>{eventState?.msg ?? ""}</h6>
    </NotifyOverlay>
  );
};

export default NotifyEvent;
