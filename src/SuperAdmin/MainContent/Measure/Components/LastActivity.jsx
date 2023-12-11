import React from "react";
import style from "./LastActivity.module.css";
import "./Table.css";

// function createData(user, insName, join, btn) {
//   return { user, insName, join, btn };
// }

// const rows = [
//   createData(
//     {
//       img: "/images/member_tab/class/default_avatar.svg",
//       userName: "ankitajain_001",
//       userLegalName: "Ankita Prakash Jain",
//     },
//     "Sandip Institute Of Polytechnic SIP Nashik",
//     "11 July  2022",
//     24
//   ),
// ];

function LastActivity() {
  return (
    <div className={style.last}>
      <div className={style.top}>
        <p className={style.activity}>Last Activity</p>
        <div className={style.setting}>
          <img src="/images/admin/setting-blue-icon.svg" alt="" />
          <p>Settings</p>
        </div>
      </div>

      {/* <div className={style.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell align="right">Institute Name</TableCell>
                <TableCell align="right">Joining Date</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className={style.user}>
                      <img src={row.user.img} />
                      <div className={style.text}>
                        <h6>{row.user.userName}</h6>
                        <p>{row.user.userLegalName}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className={style.insName}>{row.insName}</div>
                  </TableCell>
                  <TableCell align="right">
                    <div className={style.joinDate}> {row.join}</div>
                  </TableCell>
                  <TableCell align="right">
                    <div className={style.btn}>View Profile</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}
    </div>
  );
}

export default LastActivity;
