import React, { useEffect } from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import LibraryHead from "../Mainbody/LibraryHead/LibraryHead";
import { libraryChangeAction } from "../../../redux/store/library-slice";
import LibrarySiteInfo from "../Mainbody/LibraryHead/LibrarySiteInfo/LibrarySiteInfo";

const LibraryConfig = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.info("this is finance loactio", location);
  useEffect(() => {
    dispatch(
      libraryChangeAction.libraryQuery({
        lid: location?.state?.onClickValue?._id,
        lhead: location?.state?.onClickValue?.libraryHead?._id,
      })
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {location?.search?.substring(3) === "site" ? (
        <LibrarySiteInfo lid={location?.state?.onClickValue?._id} />
      ) : (
        <StaffMemberConfig
          index="8"
          sid={location?.state?.sid ?? ""}
          onClickValue={location?.state?.onClickValue ?? ""}
        >
          <LibraryHead
            onClickValue={location?.state?.onClickValue ?? ""}
            carryParentState={location?.state}
          />
        </StaffMemberConfig>
      )}
    </>
  );
};

export default LibraryConfig;
