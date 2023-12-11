import {
  useAddDepartmentMutation,
  useAddNewBatchMutation,
  useAddSubjectMasterMutation,
  useAllClassMasterQuery,
  useAllDepartmentQuery,
  useAllSubjectMasterQuery,
  useViewDepartmentQuery,
  useAddClassMasterMutation,
  useAllApproveStaffQuery,
  useAddClassMutation,
  useAllSubjectOneClassQuery,
  useAddSubjectClassMutation,
  useClassProfileQuery,
  useSetCurrentBatchMutation,
  useAddNewIdenitcalBatchMutation,

  //for department edit
  useEditDetailDepartmentQuery,
  useEditDepartmentMutation,
  useDeleteDepartmentMutation,
  useEditBatchtMutation,
  useDeleteBatchMutation,
  useDeleteClassMasteMutation,
  useEditDetailClassQuery,
  useEditClassMutation,
  useDeleteClassMutation,
  useDeleteSubjectMasterMutation,
  useEditDetailSubjectQuery,
  useEditSubjectMutation,
  useDeleteSubjectMutation,
  ////
  useUserProfileQuery,
  useUpdateUserProfileMutation,

  //FOR THE INSTITUTE Form Setting OF STAFF and STUDENT
  useInstituteStaffFormQuery,
  useInstituteStudentFormQuery,
  useInstituteFormSettingUpdateMutation,
  //for Staff form Edit
  useStaffProfilePhotoMutation,
  useStaffFormEditMutation,
  useAddStudentToClassMutation,
  useAddStudentByXlSXMutation,
  ///
  useGetModeratorByInstituteQuery,
  useAddModeratorByInstituteMutation,
  useUpdateModeratorByInstituteMutation,
  useDeleteModeratorByInstituteMutation,
  useExportStudentAttendanceZipMutation,
  useExportStudentReportZipMutation,
  useAssignDesignationToStaffMutation,
  useDeleteOneClassAllStudentMutation,
  useBatchLockUnlockActionMutation,
  //
  useAddUnapprovedStudentExcelByInstituteMutation,
  useGetUnapprovedStudentByInstituteQuery,

  // for department toggle
  useDepartmentStudentFormQuery,
  useDepartmentFormSettingUpdateMutation,
  useStudentProfileTextFormatMutation,
  useAllClassQuery,
  useAddStaffDesignationMultipleMutation,
  useGetStaffDesignationMultipleQuery,
  useEditClassMasteMutation,
  useEditSubjectMasterMutation,
  useExportStudentSubjectAttendanceZipMutation,
} from "../../../../services/InstituteDepartment/instituteDepartmentApiDynamic";

export const useAllDepartment = (args) => {
  const { data, refetch } = useAllDepartmentQuery(args.id, {
    skip: args.skip,
  });
  return { allDepartment: data, allDepartmentRefetch: refetch };
};

export const useAllDepartmentCondition = (args) => {
  const { data, refetch } = useAllDepartmentQuery(args.id, {
    skip: args.skip,
  });
  return { allDepartment: data, allDepartmentRefetch: refetch };
};

export const useAddNewDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();
  return [addDepartment];
};

export const useOneViewDepartment = (args) => {
  const { data, refetch } = useViewDepartmentQuery(args.did, {
    skip: args.skip,
  });
  return { oneDepartment: data, oneDepartmentRefetch: refetch };
};

export const useOneDepartmentAddBatch = () => {
  const [addBatch] = useAddNewBatchMutation();
  return [addBatch];
};

export const useOneDepartmentAddIdenticalBatch = () => {
  const [addIdenticalBatch] = useAddNewIdenitcalBatchMutation();
  return [addIdenticalBatch];
};

export const useOneDepartmentAddClassMaster = () => {
  const [addClassMaster] = useAddClassMasterMutation();
  return [addClassMaster];
};
export const useOneDepartmentAllClassMaster = (args) => {
  const { data, refetch } = useAllClassMasterQuery(args.data, {
    skip: args.skip,
  });
  return { allClassMaster: data, allClassMasterRefetch: refetch };
};

export const useOneDepartmentAddSubjectMaster = () => {
  const [addSubjectMaster] = useAddSubjectMasterMutation();
  return [addSubjectMaster];
};

export const useOneDepartmentAllSubjectMaster = (args) => {
  const { data, refetch } = useAllSubjectMasterQuery(args.data, {
    skip: args.skip,
  });
  return { allSubjectMaster: data, allSubjectMasterRefetch: refetch };
};
export const useOneDepartmentAddClass = () => {
  const [addClass] = useAddClassMutation();
  return [addClass];
};

export const useAllApproveStaffDepartment = (id) => {
  const { data, refetch, isFetching } = useAllApproveStaffQuery(id?.id, {
    skip: id?.skip ? id?.skip : false,
  });
  return {
    allApproveStaff: data,
    allApproveStaffRefetch: refetch,
    isFetching: isFetching,
  };
};

export const useOneDepartmentAllBatch = (id) => {
  const { data, refetch } = useAllDepartmentQuery(id);
  return [data, refetch];
};

export const useOneDepartmentCurrentBatch = (id) => {
  const { data, refetch } = useAllDepartmentQuery(id);
  return [data, refetch];
};

export const useOneDepartmentSetCurrentBatch = () => {
  const [setBatch] = useSetCurrentBatchMutation();
  return [setBatch];
};
export const useOneBatchAllClass = (id) => {
  const { data, refetch } = useAllDepartmentQuery(id);
  return [data, refetch];
};

//FOR THE CLASS PROFILE PAGE
export const useOneDepartmentClassProfile = (args) => {
  const { data, refetch } = useClassProfileQuery(args.cid, {
    skip: args.skip,
  });
  return { oneClassProfile: data, oneClassProfileRefetch: refetch };
};
export const useOneDepartmentAddSubjectClass = () => {
  const [addSubjectInClass] = useAddSubjectClassMutation();
  return [addSubjectInClass];
};
export const useOneDepartmentAllSubjectOneClass = (args) => {
  const { data, refetch } = useAllSubjectOneClassQuery(args.cid, {
    skip: args.skip,
  });
  return { oneClassAllSubject: data, oneClassAllSubjectRefetch: refetch };
};

//FOR THE DEPARTMENT EDIT AND DELETE
export const useOneDepartmenteEditDetail = (data) => {
  const { data: departmentEditDetail, refetch: departmentEditDetailRefetch } =
    useEditDetailDepartmentQuery(data.did, { skip: data.skip });
  return { departmentEditDetail, departmentEditDetailRefetch };
};

export const useOneDepartmenteEdit = () => {
  const [departmentEdit] = useEditDepartmentMutation();
  return [departmentEdit];
};
export const useOneDepartmenteDelete = () => {
  const [departmentDelete] = useDeleteDepartmentMutation();
  return [departmentDelete];
};
export const useOneBatchEdit = () => {
  const [batchEdit] = useEditBatchtMutation();
  return [batchEdit];
};
export const useOneBatchDelete = () => {
  const [batchDelete] = useDeleteBatchMutation();
  return [batchDelete];
};
export const useOneClassMasterDelete = () => {
  const [classMasterDelete] = useDeleteClassMasteMutation();
  return [classMasterDelete];
};
export const useOneClassMasterEdit = () => {
  const [classMasterEdit] = useEditClassMasteMutation();
  return [classMasterEdit];
};
export const useOneClassEditDetail = (data) => {
  const { data: classEditDetail, refetch: classEditDetailRefetch } =
    useEditDetailClassQuery(data.cid, { skip: data.skip });
  return { classEditDetail, classEditDetailRefetch };
};
export const useOneClassEdit = () => {
  const [classEdit] = useEditClassMutation();
  return [classEdit];
};
export const useOneClassDelete = () => {
  const [classDelete] = useDeleteClassMutation();
  return [classDelete];
};
export const useOneSubjectMasterDelete = () => {
  const [subjectMasterDelete] = useDeleteSubjectMasterMutation();
  return [subjectMasterDelete];
};
export const useOneSubjectMasterEdit = () => {
  const [subjectMasterEdit] = useEditSubjectMasterMutation();
  return [subjectMasterEdit];
};
export const useOneSubjectEditDetail = (data) => {
  const { data: subjectEditDetail, refetch: subjectEditDetailRefetch } =
    useEditDetailSubjectQuery(data.sid, { skip: data.skip });
  return { subjectEditDetail, subjectEditDetailRefetch };
};
export const useOneSubjectEdit = () => {
  const [subjectEdit] = useEditSubjectMutation();
  return [subjectEdit];
};
export const useOneSubjectDelete = () => {
  const [subjectDelete] = useDeleteSubjectMutation();
  return [subjectDelete];
};

//FOR THE INSTITUTE Form Setting OF STAFF and STUDENT

export const useInstituteStaffForm = (args) => {
  const { data, refetch } = useInstituteStaffFormQuery(args.id, {
    skip: args.skip,
  });
  return {
    instituteStaffForm: data,
    instituteStaffFormRefetch: refetch,
  };
};
export const useInstituteStudentForm = (args) => {
  const { data, refetch } = useInstituteStudentFormQuery(args.id, {
    skip: args.skip,
  });
  return {
    instituteStudentForm: data,
    instituteStudentFormRefetch: refetch,
  };
};

export const useInstituteFormSettingUpdate = () => {
  const [instituteFormSettingUpdate] = useInstituteFormSettingUpdateMutation();
  return [instituteFormSettingUpdate];
};
//FOR THE USER PROFILE UPDATE
export const useUserProfile = (id) => {
  const { data, refetch } = useUserProfileQuery(id);
  return { userProfile: data, userProfileRefetch: refetch };
};
export const useUpdateUserProfile = () => {
  const [updateUserProfile] = useUpdateUserProfileMutation();
  return [updateUserProfile];
};

// For staff Form Photo edit

export const useStaffProfilePhoto = () => {
  const [staffProfilePhoto] = useStaffProfilePhotoMutation();
  return [staffProfilePhoto];
};

export const useStaffFormEdit = () => {
  const [staffFormEdit] = useStaffFormEditMutation();
  return [staffFormEdit];
};

export const useAddStudentToClass = () => {
  const [addStudetToClass] = useAddStudentToClassMutation();
  return [addStudetToClass];
};

export const useAddStudentByXlSX = () => {
  const [addStudentByXlSX] = useAddStudentByXlSXMutation();
  return [addStudentByXlSX];
};

export const useGetModeratorByInstitute = (args) => {
  const { data, refetch } = useGetModeratorByInstituteQuery(args.data, {
    skip: args.skip,
  });
  return {
    getModeratorByInstitute: data,
    getModeratorByInstituteRefetch: refetch,
  };
};
export const useAddModeratorByInstitute = () => {
  const [addModeratorByInstitute] = useAddModeratorByInstituteMutation();
  return [addModeratorByInstitute];
};

export const useUpdateModeratorByInstitute = () => {
  const [updateModeratorByInstitute] = useUpdateModeratorByInstituteMutation();
  return [updateModeratorByInstitute];
};

export const useDeleteModeratorByInstitute = () => {
  const [deleteModeratorByInstitute] = useDeleteModeratorByInstituteMutation();
  return [deleteModeratorByInstitute];
};
export const useExportStudentAttendanceZip = () => {
  const [exportStudentAttendanceZip] = useExportStudentAttendanceZipMutation();
  return [exportStudentAttendanceZip];
};
export const useExportStudentSubjectAttendanceZip = () => {
  const [exportStudentSubjectAttendanceZip] =
    useExportStudentSubjectAttendanceZipMutation();
  return [exportStudentSubjectAttendanceZip];
};

export const useExportStudentReportZip = () => {
  const [exportStudentReportZip] = useExportStudentReportZipMutation();
  return [exportStudentReportZip];
};
export const useAssignDesignationToStaff = () => {
  const [assignDesignationToStaff] = useAssignDesignationToStaffMutation();
  return [assignDesignationToStaff];
};
export const useDeleteOneClassAllStudent = () => {
  const [deleteOneClassAllStudent] = useDeleteOneClassAllStudentMutation();
  return [deleteOneClassAllStudent];
};
export const useBatchLockUnlockAction = () => {
  const [batchLockUnlockAction] = useBatchLockUnlockActionMutation();
  return [batchLockUnlockAction];
};

export const useAddUnapprovedStudentExcelByInstitute = () => {
  const [addUnapprovedStudentExcelByInstitute] =
    useAddUnapprovedStudentExcelByInstituteMutation();
  return [addUnapprovedStudentExcelByInstitute];
};
export const useGetUnapprovedStudentByInstitute = (args) => {
  const { data, refetch } = useGetUnapprovedStudentByInstituteQuery(args.data, {
    skip: args.skip,
  });
  return {
    getUnapprovedStudentByInstitute: data,
    getUnapprovedStudentByInstituteRefetch: refetch,
  };
};

// department form toggle
export const useDepartmentStudentForm = (args) => {
  const { data, refetch } = useDepartmentStudentFormQuery(args.did, {
    skip: args.skip,
  });
  return {
    departmentStudentForm: data,
    departmentStudentFormRefetch: refetch,
  };
};

export const useDepartmentFormSettingUpdate = () => {
  const [departmentFormSettingUpdate] =
    useDepartmentFormSettingUpdateMutation();
  return [departmentFormSettingUpdate];
};

export const useStudentProfileTextFormat = () => {
  const [studentProfileTextFormat] = useStudentProfileTextFormatMutation();
  return [studentProfileTextFormat];
};

export const useAllClass = (args) => {
  const { data: allClass, refetch: allClassRefetch } = useAllClassQuery(
    args.bid,
    { skip: args.skip }
  );
  return {
    allClass,
    allClassRefetch,
  };
};

export const useAddStaffDesignationMultiple = () => {
  const [addStaffDesignationMultiple] =
    useAddStaffDesignationMultipleMutation();
  return [addStaffDesignationMultiple];
};

export const useGetStaffDesignationMultiple = (args) => {
  const { data, refetch } = useGetStaffDesignationMultipleQuery(args.id, {
    skip: args.skip,
  });
  return {
    getStaffDesignationMultiple: data,
    getStaffDesignationMultipleRefetch: refetch,
  };
};
