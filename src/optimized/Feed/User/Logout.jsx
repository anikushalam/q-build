import ModalMenu from "@/Ui/Modal/ModalMenu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Logout = ({ onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <ModalMenu heading={t("logout_of_qviple")} onClose={onClose}>
      <h6 onClick={onLogout}>{t("logout")}</h6>
      <h6
        onClick={onClose}
        style={{
          fontWeight: "400",
        }}
      >
        {t("cancel")}
      </h6>
    </ModalMenu>
  );
};

export default Logout;
