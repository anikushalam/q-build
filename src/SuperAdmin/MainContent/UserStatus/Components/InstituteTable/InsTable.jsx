import React, { useEffect, useState } from "react";
import style from "./InsTable.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useGetUserArrayQuery } from "../../../../../services/superAdminAPI";
import { useInView } from "react-intersection-observer";
import { adminChangeAction } from "../../../../../redux/store/superAdmin-slice";
import { useDispatch, useSelector } from "react-redux";

function InsTable({ userArray, setDetailView, setOpenUser }) {
  const dispatch = useDispatch()
  const [ref, inView] = useInView();
  const adminCollection = useSelector((state) => state.adminChange)
  const [page, setPage] = useState(1);
  var isPage = false
  const [userState, setUserState] = useState(true);
  const { data: userQuery, refetch: userArrayFetch } = useGetUserArrayQuery({
    info: {
      page: page,
      limit: 10
    },
    skip: isPage
  });

  useEffect(() => {
    if (inView && userState && !isPage ) setPage((page) => page + 1);
    else {
    }
  }, [inView, userState, isPage]);
  

  useEffect(() =>{
    if(!isPage) userArrayFetch()
  }, [isPage, userArrayFetch])

  useEffect(() => {

    dispatch(
      adminChangeAction.userCollection({
        user: userQuery?.users
      })
    );

    if (userQuery?.users.length === 10) setUserState(true);
    else setUserState(false);

  }, [userQuery?.users, dispatch])
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.name}>Username</th>
            <th className={style.mailnum}>Contact</th>
            <th className={style.trans}>Date of Birth</th>
            <th className={style.amount}>Gender</th>
            <th className={style.amount}>Location</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {!isPage && adminCollection?.users?.map((st, index) => (
            <>
              <tr
                ref={ref}
                onClick={() => {
                  (setDetailView = setDetailView(true))
                  setOpenUser(st?._id)
                }}
                key={index}
              >
                <td className={style.name}>
                  <div className={style.details}>
                    <img
                      src={
                        st?.photoId !== "1"
                          ? `${imageShowUrl}/${st?.profilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt="User Profile Avatar"
                    />
                    <div className={style.text}>
                      <h6 className={style.email}>{st?.username}</h6>
                      <p className={style.ga}>{st?.userLegalName}</p>
                    </div>
                  </div>
                </td>
                <td className={style.dattime}>
                  <div className={style.text}>
                    <p className={style.email}>
                      {st?.userEmail ? st?.userEmail : "Email"}
                    </p>
                    <p className={style.email}>
                      {st?.userPhoneNumber ? st?.userPhoneNumber : "Phone no."}
                    </p>
                  </div>
                </td>
                <td className={style.trans}>
                  <div className={style.id}>
                    <p>{st?.userDateOfBirth}</p>
                  </div>
                </td>
                <td className={style.amount}>
                  <div className={style.id}>
                    <p> {st?.userGender} </p>
                  </div>
                </td>

                <td className={style.dots}>
                  <div className={style.dotsdiv}>{st?.userAddress}</div>
                </td>
              </tr>
              {userArray?.users?.length !== index + 1 ? (
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
