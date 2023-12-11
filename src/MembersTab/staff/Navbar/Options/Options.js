import React from "react";
import style from "./Options.module.css";

export function Options({ options, switchOption }) {
  // console.log(options);
  return (
    <div className={style.profileToolTip}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        {options.map((option, index) => (
          <div
            value={option.code}
            onClick={() => switchOption(option)}
            key={index}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// export function Options2({ options, switchOption }) {

//   return (
//     <div className={style.profileToolTip}>
//       <div className={style.triangle}></div>

//       <div className={style.profilelist}>
//         {options.map((option, index) => (
//           <div value={option} onClick={() => switchOption(option)} key={index}>
//             {option}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
