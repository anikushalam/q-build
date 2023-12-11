import React from "react";
import style from "./FirstRow.module.css";

function FirstRow({ first }) {
  // const [value, setValue] = useState(new Date());
  const date = new Date().toDateString().slice(3);
  const time = new Date().toString().split(" ")[4];
  const hrs = time.split(":")[0];
  const minutes = time.split(":")[1];

  // useEffect(() => {
  //   const interval = setInterval(() => setValue(new Date()), 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className={style.firstRow}>
      <div className={style.left}>
        <h5>Hello {first && first.adminName}</h5>
        <p>
          This is where you can get up-to-speed with tasks, upcoming users
          activities, support and more...
        </p>
      </div>
      <div className={style.right}>
        <div>
          <h5>Today</h5>
          <p>{date}</p>
          <p>
            {hrs}: {minutes} AM
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
