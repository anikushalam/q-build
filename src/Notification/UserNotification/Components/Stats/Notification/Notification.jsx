import { useState } from "react";
import Body from "./Body/Body";
import NewFollowerBody from "./NewFollowerBody/NewFollowerBody";
// import Header from "./Header/Header";
// import NewFollowerHeader from "./NewFollowerHeader/NewFollowerHeader";
import style from "./Notification.module.css";

function Notification() {
  const [newFollowers, setNewFollowers] = useState(false);

  return (
    <>
      <div className={style.header}>
        {/* {newFollowers === true ? (
          <NewFollowerHeader
            newFollowers={newFollowers}
            changeToNewFollowers={(w) => setNewFollowers(w)}
          />
        ) : (
          <Header
            newFollowers={newFollowers}
            changeToNewFollowers={(w) => setNewFollowers(w)}
          />
        )} */}
      </div>
      <div className={style.body}>
        {newFollowers === true ? <NewFollowerBody /> : <Body />}
      </div>
    </>
  );
}

export default Notification;
