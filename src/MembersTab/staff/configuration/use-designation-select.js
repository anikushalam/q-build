import { useNavigate, useParams } from "react-router-dom";
const useDesignationSelect = () => {
  const navigate = useNavigate();
  const params = useParams();

  const onDesignationAutoSelect = (designationList) => {
    if (designationList?.staffDepartment?.length) {
      navigate(
        `/q/${params.username}/member/department/${designationList?.staffDepartment[0]?.dName}`,
        {
          state: {
            onClickValue: designationList?.staffDepartment[0],
            sid: designationList?._id,
          },
        }
      );
    } else if (designationList?.staffClass?.length) {
      navigate(
        `/q/${params.username}/member/class/${designationList?.staffClass[0]?.classTitle}`,
        {
          state: {
            onClickValue: designationList?.staffClass[0],
            sid: designationList?._id,
          },
        }
      );
    } else if (designationList?.staffSubject?.length) {
      navigate(
        `/q/${params.username}/member/subject/${designationList?.staffSubject[0]?.subjectName}`,
        {
          state: {
            onClickValue: designationList?.staffSubject[0],
            sid: designationList?._id,
          },
        }
      );
    } else if (designationList?.financeDepartment?.length) {
      navigate(`/q/${params.username}/member/staff/finance`, {
        state: {
          fid: designationList?.financeDepartment[0]?._id,
          onClickValue: designationList?.financeDepartment[0]?._id,
          sid: designationList?._id,
          insId: designationList?.institute?._id,
        },
      });
    } else if (designationList?.admissionDepartment?.length) {
      navigate(`/q/${params.username}/member/admission`, {
        state: {
          onClickValue: designationList?.admissionDepartment[0]?._id,
          sid: designationList?._id,
        },
      });
    } else if (designationList?.sportDepartment?.length) {
      navigate(`/q/${params.username}/member/sport/department`, {
        state: {
          onClickValue: designationList?.sportDepartment[0]?._id,
          sid: designationList?._id,
        },
      });
    } else if (designationList?.staffSportClass?.length) {
      navigate(
        `/q/${params.username}/member/sport/class/${designationList?.staffSportClass[0]?.sportClassName}`,
        {
          state: {
            onClickValue: designationList?.staffSportClass[0]?._id,
            sid: designationList?._id,
          },
        }
      );
    } else if (designationList?.library?.length) {
      navigate(`/q/${params.username}/member/library`, {
        state: {
          onClickValue: designationList?.library[0],
          sid: designationList?._id,
        },
      });
    } else if (designationList?.admissionModeratorDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/admission`, {
        state: {
          onClickValue: designationList?.admissionModeratorDepartment[0],
          sid: designationList?._id,
          role: "MODERATOR",
        },
      });
    } else if (designationList?.instituteModeratorDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(
        `/q/${params.username}/member/${
          designationList?.instituteModeratorDepartment[0]?.access_role ===
          "STUDENT_PROMOTE_ACCESS"
            ? "promote"
            : designationList?.instituteModeratorDepartment[0]?.access_role ===
              "CERTIFICATE_ACCESS"
            ? "certificate"
            : designationList?.instituteModeratorDepartment[0]?.access_role ===
              "ID_CARD_ACCESS"
            ? "idcard"
            : designationList?.instituteModeratorDepartment[0]?.access_role ===
              "ACADEMIC_ADMINISTRATOR_ACCESS"
            ? "administrator"
            : designationList?.instituteModeratorDepartment[0]?.access_role ===
              "LEAVING_AND_TRANSFER_ACCESS"
            ? "leavestransfer"
            : "exam"
        }`,
        {
          state: {
            onClickValue: designationList?.instituteModeratorDepartment[0],
            sid: designationList?._id,
            role: "MODERATOR",
            insId: designationList?.institute?._id,
          },
        }
      );
    } else if (designationList?.financeModeratorDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/staff/finance`, {
        state: {
          fid: designationList?.financeModeratorDepartment[0]?._id,
          onClickValue: designationList?.financeModeratorDepartment[0],
          sid: designationList?._id,
          role: "MODERATOR",
        },
      });
    } else if (designationList?.hostelDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/hostel`, {
        state: {
          onClickValue: designationList?.hostelDepartment[0],
          sid: designationList?._id,
          // role: "MODERATOR",
        },
      });
    } else if (designationList?.hostelUnitDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/hostel/warden`, {
        state: {
          onClickValue: designationList?.hostelUnitDepartment[0],
          sid: designationList?._id,
          huid: designationList?.hostelUnitDepartment[0],
          // role: "MODERATOR",
        },
      });
    } else if (designationList?.hostelModeratorDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/hostel`, {
        state: {
          onClickValue: designationList?.hostelModeratorDepartment[0],
          sid: designationList?._id,
          role: "MODERATOR",
        },
      });
    } else if (designationList?.transportDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/transport`, {
        state: {
          onClickValue: designationList?.transportDepartment[0],
          sid: designationList?._id,
          // role: "MODERATOR",
        },
      });
    } else if (designationList?.mentorDepartment?.length) {
      // console.info(
      //   "this is auto ",
      //   designationList?.admissionModeratorDepartment
      // );
      navigate(`/q/${params.username}/member/mentor`, {
        state: {
          onClickValue: designationList?.mentorDepartment[0],
          sid: designationList?._id,
        },
      });
    } else {
      navigate(`/q/${params.username}/member/status`, {
        state: {
          sid: designationList?._id,
        },
      });
    }
  };

  return { onDesignationAutoSelect };
};

export { useDesignationSelect };
