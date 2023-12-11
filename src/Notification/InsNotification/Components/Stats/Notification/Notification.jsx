import { lazy, useState } from "react";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import style from "./Notification.module.css";
import Body from "./Body/Body";
import Header from "./Header/Header";
const NewFollowerBody = lazy(() => import("./NewFollowerBody/NewFollowerBody"));
const NewFollowerHeader = lazy(() =>
  import("./NewFollowerHeader/NewFollowerHeader")
);

function Notification() {
  const [newFollowers, setNewFollowers] = useState(false);

  return (
    <>
      <div className={style.header}>
        {newFollowers === true ? (
          <CustomSuspense>
            <NewFollowerHeader
              newFollowers={newFollowers}
              changeToNewFollowers={(w) => setNewFollowers(w)}
            />
          </CustomSuspense>
        ) : (
          <Header
            newFollowers={newFollowers}
            changeToNewFollowers={(w) => setNewFollowers(w)}
          />
        )}
      </div>
      <div className={style.body}>
        {newFollowers === true ? (
          <CustomSuspense>
            <NewFollowerBody />
          </CustomSuspense>
        ) : (
          <Body />
        )}
      </div>
    </>
  );
}

export default Notification;
