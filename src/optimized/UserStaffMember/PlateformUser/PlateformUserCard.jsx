import { assestsFeedUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
import style from "./PlateformUser.module.css";
import { imageShowUrl } from "../../Services/UrlConfig/BaseUrl";
import BorderBottom from "../../Ui/Border/BorderBottom";
const PlateformUserCard = ({ user, selectedId, onSelect }) => {
  const onSelectUser = () => {
    onSelect(user);
  };
  return (
    <>
      <div
        className={style.assign_show_list_each}
        style={
          selectedId === user?._id
            ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
            : null
        }
        onClick={onSelectUser}
      >
        <img
          src={
            user?.profilePhoto
              ? `${imageShowUrl}/${user.profilePhoto}`
              : `${assestsFeedUrl}/feed-user-avatar.svg`
          }
          alt="profile avatar"
        />
        <div className={style.assign_each_paragraph}>
          <h6>{user?.userLegalName}</h6>
          <p>{user?.username}</p>
        </div>
      </div>
      <BorderBottom
        customStyleBorder={{
          margin: "0",
        }}
      />
    </>
  );
};

export default PlateformUserCard;
