import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import Navleft from "./components/Navleft";
import Navright from "./components/Navright";
import Navmid from "./components/Navmid";
import { useDispatch, useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
import { idChangeAction } from "../../../../redux/store/department-slice";

function Navbar({ status }) {
  const id = useSelector((state) => state.idChange.id);
  const dispatch = useDispatch();
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);

  useEffect(() => {
    if (oneInstituteDashboard?.institute) {
      dispatch(
        idChangeAction.addLoginProfile({
          profile: {
            username: oneInstituteDashboard?.institute?.name,
            insName: oneInstituteDashboard?.institute?.insName,
          },
        })
      );
    }
  }, [oneInstituteDashboard?.institute]);
  return (
    <div className={style.navbar}>
      <Navleft searchUserName={oneInstituteDashboard?.institute} />
      <Navmid midData={oneInstituteDashboard?.institute} status={status} />
      <Navright />
    </div>
  );
}

export default Navbar;
