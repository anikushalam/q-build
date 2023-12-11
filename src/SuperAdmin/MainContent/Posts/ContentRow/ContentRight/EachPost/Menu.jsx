import React, { useEffect, useRef, useState } from "react";
import { useGetAdminOnePostBlockMutation } from "../../../../../../services/superAdminAPI";
import { FileNotUpload } from '../../../../../../validation/Snackbar'

import style from "./Menu.module.css";

function Menu({ options, setDotsClicked, closeMenu, popup, postId }) {
  const [postBlock] = useGetAdminOnePostBlockMutation()
  const ref = useRef(null); 
  const [run, setRun] = useState(false)
  const [message, setMessage] = useState('')
  const clickHandler = () => {
    setDotsClicked(false);
  };

  const handleClickOutside = (e) => {
    if (
      !e.target.style.zIndex &&
      e.target.style.zIndex !== "50" &&
      options[0] !== "Every one"
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BlockPost = () =>{
    if(postId !== ''){
      postBlock(postId).then((res) =>{
        if(res.data.status){
          setMessage("Post Blocked By Super Admin");
          setRun(true);
        }
      })
    }
  }

  return (
    <>
    {/* { message !== '' ? <FileNotUpload message={message} run={run} setRun={setRun}/> : ''} */}
    <div
      className={
        popup
          ? `${style.profileToolTip} ${style.profileToolTipPopup}`
          : style.profileToolTip
      }
      id="menuTooltip"
    >
      <div
        className={
          popup
            ? `${style.triangle} ${style.trianglePopup}`
            : `${style.triangle} ${style.triangleNotPopup}`
        }
      ></div>

      <div className={style.profilelist}
      onClick={BlockPost}
      >
        {options.map((option, index) => (
          <div
            ref={ref}
            style={{ zIndex: "50" }}
            value={option}
            onClick={() => clickHandler(option)}
            key={index}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Menu;
