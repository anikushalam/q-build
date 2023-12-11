// import React, { useState } from "react";
// import style from "./Feed.module.css";
// import LayoutFeed from "@/Layout/LayoutFeed";
// import UserFeedLeft from "./UserFeedLeft/UserFeedLeft";
// import UserFeedRight from "./UserFeedRight/UserFeedRight";
// import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
// import Modal from "@/Ui/Modal/Modal";
// const Feed = () => {
//   const [state, setState] = useState({
//     open: false,
//     msg: "",
//     variant: "success",
//   });
//   const [open, setOpen] = useState({
//     open: false,
//     xoffset: 0,
//     yoffset: 0,
//   });
//   const openModal = (event) => {
//     if (open.open) {
//       setOpen({
//         open: false,
//         xoffset: 0,
//         yoffset: 0,
//       });
//     } else {
//       console.info("event", event);
//       let modalHight = (event.clientY * 100) / event?.view?.innerHeight;
//       modalHight += 1;
//       let modalWidth = (event.clientX * 100) / event?.view?.innerWidth;
//       modalWidth += 1;
//       setOpen((prev) => ({
//         ...prev,
//         open: !prev?.open,
//         xoffset: `${modalWidth?.toFixed(2)}%`,
//         yoffset: `${modalHight?.toFixed(2)}%`,
//       }));
//     }

//     // setOpen((pre) => !pre);
//   };
//   const onOpen = () => {
//     setState((prev) => ({
//       ...prev,
//       open: true,
//       msg: "My name is khan",
//       variant: "success",
//     }));
//   };
//   return (
//     <LayoutFeed>
//       <div className={style.feed_container}>
//         <UserFeedLeft />
//         <div className={style.feed_middle} onClick={openModal}>
//           he ravi
//         </div>
//         <UserFeedRight />
//       </div>
//       {open.open && <Modal onClose={openModal} modalState={open} />}
//       <NotifyEvent eventState={state} eventStateHandler={setState} />
//     </LayoutFeed>
//   );
// };

// export default Feed;
import UserFeed from "./User/UserFeed";

const Feed = () => {
  return <UserFeed />;
};

export default Feed;
