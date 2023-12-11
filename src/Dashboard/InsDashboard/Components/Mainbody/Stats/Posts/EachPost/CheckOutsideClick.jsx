import React, { useEffect, useRef } from "react";

function CheckOutsideClick({ children }) {
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    // if (ref.current && !ref.current.cotains(e.target)) {
    //   closeMenu && closeMenu();
    // }
    // console.log(e.target, ref.current.children);
    // if (e.target.style.zIndex === 50) {
    // } else {
    //   closeMenu();
    // }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}

export default CheckOutsideClick;
