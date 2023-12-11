import {
  useFetchStaffIdCardQuery,
  useFetchStudentExportDatMutation,
  useFetchFinanceExportDataQuery,
  useExportZipStudentProfilePhotoMutation,
} from "../../services/ExportData/ExportDataApi";

export const useStaffExportData = (id) => {
  const { data, refetch } = useFetchStaffIdCardQuery();
  return { staffExportData: data, staffExportDataRefetch: refetch };
};

export const useStudentExportData = () => {
  const [studentExportData] = useFetchStudentExportDatMutation();

  return [studentExportData];
};

export const useFinanceExportData = (fid) => {
  const { data, refetch } = useFetchFinanceExportDataQuery(fid);
  return { financeExportData: data, financeExportDataRefetch: refetch };
};

export const useExportZipStudentProfilePhoto = () => {
  const [exportZipStudentProfilePhoto] =
    useExportZipStudentProfilePhotoMutation();

  return [exportZipStudentProfilePhoto];
};
