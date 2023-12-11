import React, { useEffect, useState } from "react";
import style from "./InsTable.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useGetApproveInstituteArrayQuery, useUniversalMarkInstituteMutation } from "../../../../../services/superAdminAPI";
import { adminChangeAction } from "../../../../../redux/store/superAdmin-slice";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

function InsTable({ setDetailView, setApproveFetch, setOpenIns }) {
  const dispatch = useDispatch()
  const [ref, inView] = useInView();
  const adminCollection = useSelector((state) => state.adminChange)
  const [page, setPage] = useState(1);
  var isPage = false
  const [userState, setUserState] = useState(true);
  const { data: approveData, refetch: approveFetch } = useGetApproveInstituteArrayQuery({
    info: {
      page: page,
      limit: 10
    },
    skip: isPage
  });

  // if(approveData){
  //   setApproveFetch(approveFetch)
  // }
  
  useEffect(() => {
    if (inView && userState && !isPage ) setPage((page) => page + 1);
    else {
    }
  }, [inView, userState, isPage]);
  

  useEffect(() =>{
    if(!isPage) approveFetch()
  }, [isPage, approveFetch])

  useEffect(() => {

    dispatch(
      adminChangeAction.instituteCollection({
        institute: approveData?.institutes
      })
    );

    if (approveData?.institutes.length === 10) setUserState(true);
    else setUserState(false);

  }, [approveData?.institutes, dispatch])

  const [universalData] = useUniversalMarkInstituteMutation();

  const UniversalMark = (insId) => {
    var data = {
      id: insId && insId,
    };
    universalData(data).then((res) => {
      approveFetch();
    });
  };
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.sr}>Sr No.</th>
            <th className={style.name}>Institute Name</th>
            <th className={style.tottal}>Total Staff & Student</th>
            <th className={style.amt}>Due Amount</th>
            <th className={style.review}>Reviews</th>

            {approveData?.admin?.assignUniversalStatus === "Not Assigned" ? (
              <th className={style.dot}>Mark Universal</th>
            ) : (
              ""
            )}
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {!isPage && adminCollection?.institutes?.map((st, index) => (
            <>
              <tr ref={ref} onClick={() => {
                setDetailView(true)
                setOpenIns(st?._id)
              }} key={index}>
                <td className={style.sr2}>
                  <div className={style.id}>
                    <p>{index + 1}</p>
                  </div>
                </td>
                <td className={style.name2}>
                  <div className={style.details}>
                    <img
                      src={
                        st?.photoId !== "1"
                          ? `${imageShowUrl}/${st?.insProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt="Institute Profile Avatar"
                    />
                    <div className={style.text}>
                      <h6 className={style.email} title={st?.name}>
                        {st?.name}
                      </h6>
                      <p className={style.ga} title={st?.insName}>
                        {st && `${st?.insName?.substr(0, 10)}...`}
                        {st && st.isUniversal === "Universal"
                          ? ` ( Qviple Universal )`
                          : ""}
                      </p>
                    </div>
                  </div>
                </td>
                <td className={style.tottal2}>
                  <div className={style.text}>
                    <p className={style.total}>
                      Total Staff:{" "}
                      <span className={style.totalspan}>
                        {st?.staffCount ? st?.staffCount : 0}
                      </span>
                    </p>
                    <p className={style.total}>
                      Total Students:{" "}
                      <span className={style.totalspan}>
                        {st?.studentCount ? st?.studentCount : 0}
                      </span>
                    </p>
                  </div>
                </td>
                <td className={style.amt2}>Rs. 0</td>
                <td className={style.review2}>Awesome</td>
                <td className={style.dot2}>
                  <div className={style.dotsdiv}>
                    {approveData?.admin?.assignUniversalStatus === "Not Assigned" ? (
                      <button
                        type="button"
                        className="btn btn-primary universalBtn"
                        onClick={() => UniversalMark(st?._id)}
                      >
                        {st && st.isUniversal && st.isUniversal === "Universal"
                          ? "Universal"
                          : "Mark"}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              </tr>
              {index + 1 !== adminCollection?.institutes?.length ? (
                <div className={style.divider} />
              ) : (
                ""
              )}
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default InsTable;
