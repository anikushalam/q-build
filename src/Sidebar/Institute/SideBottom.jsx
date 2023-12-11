import React, { useState } from "react";
import style from "./SideBottom.module.css";
import Avatar from "@mui/material/Avatar";
import AddDisplay from "../../Dashboard/InsDashboard/Modals/AddDisplay";

function Item({ name, dsignation, img }) {
  const [dotsClick, setDotsClick] = useState(false);

  return (
    <div className={style.item}>
      <Avatar alt="Remy Sharp" src={img} />
      <div className={style.itemText}>
        <h6>{dsignation}</h6>
        <p>{name}</p>
      </div>
      <img
        alt="not found"
        className={style.dots}
        src="/images/menu-dots-icon.svg"
        onClick={() => setDotsClick(!dotsClick)}
      />
      <div
        className={
          dotsClick
            ? style.triangle
            : `${style.triangle} ${style.triangleDisplay}`
        }
      ></div>

      <ul
        className={
          dotsClick ? style.list : `${style.list} ${style.listDisplay}`
        }
      >
        <li
          style={{ paddingTop: "10px" }}
          className={style.options}
          onClick={() => setDotsClick(false)}
        >
          <p>Edit Display Person</p>
        </li>
        <hr />

        <li className={style.options} onClick={() => setDotsClick(false)}>
          <p>Remove Display Person</p>
        </li>
      </ul>
    </div>
  );
}

function SideBottom() {
  const [addDisplay, setAddDisplay] = useState(false);
  return (
    <div className={style.sidebarBottom}>
      <Item
        name="Dr. Shekarchandra Patil"
        dsignation="Principle"
        img="/images/testimonial-1.svg"
      />
      <Item
        name="Dr. Suresh Ramdas
Kumar"
        dsignation="Vice Principle"
        img="/images/testimonial-2.svg"
      />
      <Item
        name="Dean"
        dsignation="Vice Principle"
        img="/images/testimonial-3.svg"
      />

      <div className={style.item} onClick={() => setAddDisplay(true)}>
        <Avatar src="/broken-image.jpg" />
        <div className={style.itemText}>
          <h6>Add</h6>
          <p>Name and Profession</p>
        </div>
        <img
          alt="not found"
          className={style.dots}
          src="/images/menu-dots-icon.svg"
        />
      </div>

      {addDisplay && (
        <AddDisplay
          hideModal={(w) => setAddDisplay(w)}
          addDisplay={addDisplay}
        />
      )}
    </div>
  );
}

export default SideBottom;
