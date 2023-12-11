import { deleteMethod, patchMethod, postMethod } from "../BaseUrl";
import { instituteDepartmentApi } from "./instituteDepartmentApi";
import {
  addBatchDepartmentFunction,
  addClassDepartmentFunction,
  addClassMasterDepartmentFunction,
  addDepartmentFunction,
  addSubjectClassDepartmentFunction,
  addSubjectMasterDepartmentFunction,
  allBatchDepartmentFunction,
  allClassMasterDepartmentFunction,
  allDepartmentFunction,
  allSubjectMasterDepartmentFunction,
  currentBatchDepartmentFunction,
  oneBatchClassDepartmentFunction,
  oneClassProfileDepartmentFunction,
  oneDepartmentFunction,
  setCurrentBatchDepartmentFunction,
  oneClassAllSubjectDepartmentFunction,
  allApproveStaffDepartmentFunction,
  addIdenticalBatchDepartmentFunction,
  ///////////
  getDetailDepartmentFunction,
  editDepartmentFunction,
  deleteDepartmentFunction,
  editBatchFunction,
  deleteBatchFunction,
  deleteClassMasterFunction,
  getDetailClassFunction,
  editClassFunction,
  deleteClassFunction,
  deleteSubjectMasterFunction,
  getDetailSubjectFunction,
  editSubjectFunction,
  deleteSubjectFunction,

  ///////////
  instituteStaffFormFunction,
  instituteStudentFormFunction,
  instituteFormSettingUpdateFunction,
  /////////////////
  userProfileFunction,
  updateUserProfileFunction,

  ///
  staffProfilePhotoFunction,
  staffFormEditFunction,
  addStudentToClassFunction,
  addStudentByXlSXFunction,
  getModeratorByInstituteFunction,
  addModeratorByInstituteFunction,
  updateModeratorByInstituteFunction,
  deleteModeratorByInstituteFunction,
  exportStudentAttendanceZipFunction,
  exportStudentSubjectAttendanceZipFunction,
  exportStudentReportZipFunction,
  assignDesignationToStaffFunction,
  deleteOneClassAllStudentFunction,
  batchLockUnlockActionFunction,
  addUnapprovedStudentExcelByInstituteFunction,
  getUnapprovedStudentByInstituteFunction,
  //
  departmentStudentFormFunction,
  departmentFormSettingUpdateFunction,
  studentProfileTextFormatFunction,
  addStaffDesignationMultipleFunction,
  getStaffDesignationMultipleFunction,
  editClassMasterFunction,
  editSubjectMasterFunction,
} from "./QueryMutationFunctionDepartment";

export const instituteDepartmentApiDynamic =
  instituteDepartmentApi.injectEndpoints({
    endpoints: (builder) => ({
      allDepartment: allDepartmentFunction(builder),
      addDepartment: addDepartmentFunction(builder, postMethod),
      viewDepartment: oneDepartmentFunction(builder),
      allBatch: allBatchDepartmentFunction(builder),
      addNewBatch: addBatchDepartmentFunction(builder, postMethod),
      addNewIdenitcalBatch: addIdenticalBatchDepartmentFunction(
        builder,
        postMethod
      ),
      currentBatch: currentBatchDepartmentFunction(builder),
      setCurrentBatch: setCurrentBatchDepartmentFunction(builder, postMethod),
      addClassMaster: addClassMasterDepartmentFunction(builder, postMethod),
      allClassMaster: allClassMasterDepartmentFunction(builder),
      addSubjectMaster: addSubjectMasterDepartmentFunction(builder, postMethod),
      allSubjectMaster: allSubjectMasterDepartmentFunction(builder),
      addClass: addClassDepartmentFunction(builder, postMethod),
      allClass: oneBatchClassDepartmentFunction(builder),
      addSubjectClass: addSubjectClassDepartmentFunction(builder, postMethod),
      classProfile: oneClassProfileDepartmentFunction(builder),
      allSubjectOneClass: oneClassAllSubjectDepartmentFunction(builder),
      allApproveStaff: allApproveStaffDepartmentFunction(builder),

      // For department EDIT AND DELETE
      editDetailDepartment: getDetailDepartmentFunction(builder),
      editDepartment: editDepartmentFunction(builder, patchMethod),
      deleteDepartment: deleteDepartmentFunction(builder, deleteMethod),
      editBatcht: editBatchFunction(builder, patchMethod),
      deleteBatch: deleteBatchFunction(builder, deleteMethod),
      deleteClassMaste: deleteClassMasterFunction(builder, deleteMethod),
      editClassMaste: editClassMasterFunction(builder, patchMethod),
      editDetailClass: getDetailClassFunction(builder),
      editClass: editClassFunction(builder, patchMethod),
      deleteClass: deleteClassFunction(builder, deleteMethod),
      deleteSubjectMaster: deleteSubjectMasterFunction(builder, deleteMethod),
      editSubjectMaster: editSubjectMasterFunction(builder, patchMethod),
      editDetailSubject: getDetailSubjectFunction(builder),
      editSubject: editSubjectFunction(builder, patchMethod),
      deleteSubject: deleteSubjectFunction(builder, deleteMethod),

      //FOR THE INSTITUTE Form Setting OF STAFF and STUDENT
      instituteStaffForm: instituteStaffFormFunction(builder),
      instituteStudentForm: instituteStudentFormFunction(builder),
      instituteFormSettingUpdate: instituteFormSettingUpdateFunction(
        builder,
        patchMethod
      ),

      userProfile: userProfileFunction(builder),
      updateUserProfile: updateUserProfileFunction(builder, patchMethod),

      // for staff form Edit
      staffProfilePhoto: staffProfilePhotoFunction(builder, patchMethod),
      staffFormEdit: staffFormEditFunction(builder, patchMethod),
      addStudentToClass: addStudentToClassFunction(builder, postMethod),
      addStudentByXlSX: addStudentByXlSXFunction(builder, patchMethod),
      /////
      getModeratorByInstitute: getModeratorByInstituteFunction(builder),
      addModeratorByInstitute: addModeratorByInstituteFunction(
        builder,
        postMethod
      ),
      updateModeratorByInstitute: updateModeratorByInstituteFunction(
        builder,
        patchMethod
      ),
      deleteModeratorByInstitute: deleteModeratorByInstituteFunction(
        builder,
        deleteMethod
      ),
      exportStudentAttendanceZip: exportStudentAttendanceZipFunction(
        builder,
        postMethod
      ),
      exportStudentSubjectAttendanceZip:
        exportStudentSubjectAttendanceZipFunction(builder, postMethod),

      exportStudentReportZip: exportStudentReportZipFunction(
        builder,
        postMethod
      ),
      assignDesignationToStaff: assignDesignationToStaffFunction(
        builder,
        patchMethod
      ),
      deleteOneClassAllStudent: deleteOneClassAllStudentFunction(
        builder,
        deleteMethod
      ),
      batchLockUnlockAction: batchLockUnlockActionFunction(
        builder,
        patchMethod
      ),
      addUnapprovedStudentExcelByInstitute:
        addUnapprovedStudentExcelByInstituteFunction(builder, patchMethod),
      getUnapprovedStudentByInstitute:
        getUnapprovedStudentByInstituteFunction(builder),

      //

      departmentStudentForm: departmentStudentFormFunction(builder),
      departmentFormSettingUpdate: departmentFormSettingUpdateFunction(
        builder,
        patchMethod
      ),
      studentProfileTextFormat: studentProfileTextFormatFunction(
        builder,
        patchMethod
      ),

      addStaffDesignationMultiple: addStaffDesignationMultipleFunction(
        builder,
        postMethod
      ),
      getStaffDesignationMultiple: getStaffDesignationMultipleFunction(builder),
    }),
  });

export const {
  useAllDepartmentQuery,
  useAddDepartmentMutation,
  useViewDepartmentQuery,
  useAllBatchQuery,
  useAddNewBatchMutation,
  useAddNewIdenitcalBatchMutation,
  useCurrentBatchQuery,
  useSetCurrentBatchMutation,
  useAddClassMasterMutation,
  useAllClassMasterQuery,
  useAddSubjectMasterMutation,
  useAllSubjectMasterQuery,
  useAddClassMutation,
  useAllClassQuery,
  useAddSubjectClassMutation,
  useClassProfileQuery,
  useAllSubjectOneClassQuery,
  useAllApproveStaffQuery,

  //for department delete
  useEditDetailDepartmentQuery,
  useEditDepartmentMutation,
  useDeleteDepartmentMutation,
  useEditBatchtMutation,
  useDeleteBatchMutation,
  useDeleteClassMasteMutation,
  useEditClassMasteMutation,
  useEditDetailClassQuery,
  useEditClassMutation,
  useDeleteClassMutation,
  useDeleteSubjectMasterMutation,
  useEditSubjectMasterMutation,
  useEditDetailSubjectQuery,
  useEditSubjectMutation,
  useDeleteSubjectMutation,

  //FOR THE INSTITUTE Form Setting OF STAFF and STUDENT
  useInstituteStaffFormQuery,
  useInstituteStudentFormQuery,
  useInstituteFormSettingUpdateMutation,
  ///////////////////

  useUserProfileQuery,
  useUpdateUserProfileMutation,
  useStaffProfilePhotoMutation,
  useStaffFormEditMutation,
  useAddStudentToClassMutation,
  useAddStudentByXlSXMutation,
  //////
  useGetModeratorByInstituteQuery,
  useAddModeratorByInstituteMutation,
  useUpdateModeratorByInstituteMutation,
  useDeleteModeratorByInstituteMutation,
  useExportStudentAttendanceZipMutation,
  useExportStudentSubjectAttendanceZipMutation,
  useExportStudentReportZipMutation,
  useAssignDesignationToStaffMutation,
  useDeleteOneClassAllStudentMutation,
  useBatchLockUnlockActionMutation,
  //
  useAddUnapprovedStudentExcelByInstituteMutation,
  useGetUnapprovedStudentByInstituteQuery,

  //
  useDepartmentStudentFormQuery,
  useDepartmentFormSettingUpdateMutation,
  useStudentProfileTextFormatMutation,

  useAddStaffDesignationMultipleMutation,
  useGetStaffDesignationMultipleQuery,
} = instituteDepartmentApiDynamic;
