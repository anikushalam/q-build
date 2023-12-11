import { patchMethod, postMethod, putMethod } from "../BaseUrl";
import { instituteStaffStudentApi } from "./instituteStaffStudentApi";
import {
  instituteStatsCountFunction,
  approveStaffArrayFunction,
  pendingStaffArrayFunction,
  staffApproveFunction,
  staffRejectFunction,
  oneStaffProfileFunction,
  searchStaffFunction,
  randomCodeArrayFunction,
  staffCodeFunction,
  staffLeaveListFunction,
  staffLeaveActionFunction,
  staffTransferListFunction,
  staffTransferApproveFunction,
  staffTransferRejectFunction,
  staffComplaintListFunction,
  staffComplaintDetailFunction,
  staffComplaintActionFunction,
  approveStudentArrayFunction,
  oneStudentProfileFunction,
  searchStudentFunction,
  studentComplaintListFunction,
  studentComplaintDetailFunction,
  studentComplaintActionFunction,
  studentBonafideFunction,
  studentLeavingFunction,
  getEditableFunction,
  editEditableFunction,
  addStaffToInstituteFunction,
  transferListFunction,
  approveStaffReplaceFunction,
  rejectStaffReplaceFunction,
  getFeeReceipt,
  downloadOriginalCopy,
  addStaffExcelByInstituteFunction,
  //
  getInstituteAllStudentFilterFunction,
  sendMessageToSelectStudentFunction,
  sendMessageToOneStudentFunction,

  //
  getStudentSectionEditStudentFormFunction,
  updateStudentSectionEditStudentFormFunction,
  getStudentMessageHistoryGenerateFunction,
  excelDeprtmentFunction,
  excelClassMasterFunction,
  excelSubjectMasterFunction,
  excelClassFunction,
  excelSubjectFunction,
  getStaffDesignationCheckValueFunction,
} from "./institute_staff_student_query_mutation";

const instituteStaffStudentApiDynamic =
  instituteStaffStudentApi.injectEndpoints({
    endpoints: (builder) => ({
      instituteStatsCount: instituteStatsCountFunction(builder),
      approveStaffArray: approveStaffArrayFunction(builder),
      pendingStaffArray: pendingStaffArrayFunction(builder),
      staffApprove: staffApproveFunction(builder, postMethod),
      staffReject: staffRejectFunction(builder, postMethod),
      oneStaffProfile: oneStaffProfileFunction(builder),
      searchStaff: searchStaffFunction(builder),
      randomCodeArray: randomCodeArrayFunction(builder, postMethod),
      staffCode: staffCodeFunction(builder),
      staffLeaveList: staffLeaveListFunction(builder),
      staffLeaveAction: staffLeaveActionFunction(builder, patchMethod),
      staffTransferList: staffTransferListFunction(builder),
      staffTransferApprove: staffTransferApproveFunction(builder, patchMethod),
      staffTransferReject: staffTransferRejectFunction(builder, putMethod),
      staffComplaintList: staffComplaintListFunction(builder),
      staffComplaintDetail: staffComplaintDetailFunction(builder),
      staffComplaintAction: staffComplaintActionFunction(builder, patchMethod),
      //student related hook
      approveStudentArray: approveStudentArrayFunction(builder),
      oneStudentProfile: oneStudentProfileFunction(builder),
      searchStudent: searchStudentFunction(builder),
      studentComplaintList: studentComplaintListFunction(builder),
      studentComplaintDetail: studentComplaintDetailFunction(builder),
      studentComplaintAction: studentComplaintActionFunction(
        builder,
        patchMethod
      ),
      studentBonafide: studentBonafideFunction(builder, postMethod),
      studentLeaving: studentLeavingFunction(builder, postMethod),
      getEditable: getEditableFunction(builder),
      editEditable: editEditableFunction(builder, patchMethod),
      addStaffToInstitute: addStaffToInstituteFunction(builder, postMethod),
      transferList: transferListFunction(builder),
      approveStaffReplace: approveStaffReplaceFunction(builder, patchMethod),
      rejectStaffReplace: rejectStaffReplaceFunction(builder, putMethod),
      downloadOriginalCopy: downloadOriginalCopy(builder),
      getFeeReceipt: getFeeReceipt(builder),
      addStaffExcelByInstitute: addStaffExcelByInstituteFunction(
        builder,
        patchMethod
      ),

      getInstituteAllStudentFilter: getInstituteAllStudentFilterFunction(
        builder,
        patchMethod
      ),
      sendMessageToSelectStudent: sendMessageToSelectStudentFunction(
        builder,
        patchMethod
      ),
      sendMessageToOneStudent: sendMessageToOneStudentFunction(
        builder,
        patchMethod
      ),
      getStudentSectionEditStudentForm:
        getStudentSectionEditStudentFormFunction(builder),

      updateStudentSectionEditStudentForm:
        updateStudentSectionEditStudentFormFunction(builder, patchMethod),

      getStudentMessageHistoryGenerate:
        getStudentMessageHistoryGenerateFunction(builder),

      excelDeprtment: excelDeprtmentFunction(builder, patchMethod),
      excelClassMaster: excelClassMasterFunction(builder, patchMethod),
      excelSubjectMaster: excelSubjectMasterFunction(builder, patchMethod),
      excelClass: excelClassFunction(builder, patchMethod),
      excelSubject: excelSubjectFunction(builder, patchMethod),
      getStaffDesignationCheckValue:
        getStaffDesignationCheckValueFunction(builder),
    }),
  });

export const {
  useInstituteStatsCountQuery,
  useApproveStaffArrayQuery,
  usePendingStaffArrayQuery,
  useStaffApproveMutation,
  useStaffRejectMutation,
  useOneStaffProfileQuery,
  useSearchStaffQuery,
  useRandomCodeArrayMutation,
  useStaffCodeQuery,
  useStaffLeaveListQuery,
  useStaffLeaveActionMutation,
  useStaffTransferListQuery,
  useStaffTransferApproveMutation,
  useStaffTransferRejectMutation,
  useStaffComplaintListQuery,
  useStaffComplaintDetailQuery,
  useStaffComplaintActionMutation,
  useApproveStudentArrayQuery,
  useOneStudentProfileQuery,
  useSearchStudentQuery,
  useStudentComplaintListQuery,
  useStudentComplaintDetailQuery,
  useStudentComplaintActionMutation,
  useStudentBonafideMutation,
  useStudentLeavingMutation,
  useGetEditableQuery,
  useEditEditableMutation,
  useAddStaffToInstituteMutation,
  useTransferListQuery,
  useApproveStaffReplaceMutation,
  useRejectStaffReplaceMutation,
  useGetFeeReceiptQuery,
  useDownloadOriginalCopyMutation,
  useAddStaffExcelByInstituteMutation,
  useGetInstituteAllStudentFilterMutation,
  useSendMessageToSelectStudentMutation,
  useSendMessageToOneStudentMutation,

  useGetStudentSectionEditStudentFormQuery,
  useUpdateStudentSectionEditStudentFormMutation,
  useGetStudentMessageHistoryGenerateQuery,
  useExcelDeprtmentMutation,
  useExcelClassMasterMutation,
  useExcelSubjectMasterMutation,
  useExcelClassMutation,
  useExcelSubjectMutation,
  useGetStaffDesignationCheckValueQuery,
} = instituteStaffStudentApiDynamic;
