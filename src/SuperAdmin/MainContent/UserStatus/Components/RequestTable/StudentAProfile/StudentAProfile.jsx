import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./StudentTable.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentAProfileView from "./StudentAProfileView";
import "./Table1.css";

export default function StudentAProfile({ setStaffFull, setStaffHalf }) {
  return (
    <>
      <div className="row mt-3">
        <div className="col-5">
          <>
            <TableContainer
              component={Paper}
              sx={{ marginTop: "25px", width: "100%" }}
            >
              <Table sx={{ maxWidth: 450 }} aria-label="simple table">
                <TableHead sx={{ marginBottom: "20px !important" }}>
                  <TableRow sx={{ fontWeight: "600", fontFamily: "Inter" }}>
                    <TableCell align="left">
                      <span className={style.font}>Sr No.</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className={style.font}> Institute Name</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>

            <TableContainer
              component={Paper}
              sx={{ marginTop: "25px", width: "100%" }}
            >
              <Table sx={{ maxWidth: 450 }} aria-label="simple table">
                <TableBody>
                  {/* {rows.map((row) => ( */}
                  <TableRow
                    //   key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      fontWeight: "600",
                      fontFamily: "Inter",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <span className={style.font}>1</span>
                    </TableCell>
                    <TableCell align="left">
                      <div className={style.avatar}>
                        <span className={`${style.font} mx-2`}>
                          sandeep_ploytec@1
                        </span>
                        <span className={`${style.font2} mx-2`}>
                          <br />
                          Sandip Institute Of Polytechnic SIP, Nashik
                        </span>
                      </div>
                      {/* <p>Department Head</p> */}
                    </TableCell>
                  </TableRow>

                  {/* ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        </div>
        <div className="col-7">
          <StudentAProfileView />
        </div>
      </div>
    </>
  );
}
